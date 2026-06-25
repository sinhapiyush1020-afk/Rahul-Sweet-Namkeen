import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, User, HelpCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Namaste! Swagatam to Rahul Sweets & Namkeen Kanpur. 🌸 I am your sweet assistant. How can I sweeten your day? Ask me about our specials, gift box designs, catering, or how to visit us!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "What are your sweet specialities?",
    "Where is the shop located?",
    "How to order wedding gift boxes?",
    "What are your shop hours?",
  ];

  // Scroll to bottom whenever messages list changes or loading state changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text) return;

    // Add user message to state
    const userMsg: ChatMessage = {
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setShowPulse(false);

    try {
      // Pack the message history to send to server. Include up to last 10 messages to save tokens and maintain context.
      const conversationHistory = [...messages, userMsg].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response from assistant");
      }

      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error: any) {
      console.error("Chatbot Error:", error);
      const errorMsg: ChatMessage = {
        role: "assistant",
        content: `My apologies, but I'm having trouble connecting right now. Please call us directly at 07275141414 or try asking me again. 🙏`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-24 sm:bottom-6 right-6 z-40">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowPulse(false);
          }}
          className="relative w-14 h-14 bg-bento-gold hover:bg-[#eac44e] text-bento-maroon-deep rounded-full flex items-center justify-center shadow-lg hover:shadow-bento-gold/30 transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-bento-border/20"
          aria-label="Open AI Sweet Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-bento-maroon-deep" />
          ) : (
            <MessageCircle className="w-6 h-6 text-bento-maroon-deep" />
          )}

          {/* Pulse notification light for discovery */}
          {showPulse && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bento-maroon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-bento-maroon border-2 border-[#FAF9F6]"></span>
            </span>
          )}
        </button>
      </div>

      {/* Expandable Chat Widget Dialog Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-28 sm:bottom-22 right-6 w-[calc(100vw-2.5rem)] sm:w-[400px] h-[520px] bg-[#FAF9F6] rounded-[28px] border border-bento-border shadow-2xl overflow-hidden flex flex-col z-40"
          >
            {/* Header section with brand colors */}
            <div className="relative bg-white p-4 border-b border-bento-border/60 flex items-center justify-between">
              {/* Subtle gold line accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-bento-gold" />
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-bento-cream border border-bento-border/50 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-bento-maroon" />
                </div>
                <div>
                  <h3 className="font-serif text-bento-maroon-deep font-bold text-sm">Rahul Sweets AI Assistant</h3>
                  <span className="text-[10px] text-emerald-600 font-sans font-semibold block flex items-center space-x-1">
                    <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse mr-1"></span>
                    Online & Ready
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg"
                aria-label="Close Chat Window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Thread Container */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#FAF9F6] custom-scrollbar">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[85%] ${
                      msg.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
                    }`}
                  >
                    {/* Role Avatar */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        msg.role === "user"
                          ? "bg-bento-cream text-bento-maroon border border-bento-border/50"
                          : "bg-white text-bento-maroon border border-bento-border"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 text-bento-maroon" />
                      )}
                    </div>

                    {/* Speech bubble */}
                    <div className="space-y-1">
                      <div
                        className={`p-3 rounded-2xl text-sm font-sans leading-relaxed ${
                          msg.role === "user"
                            ? "bg-bento-maroon text-white font-medium rounded-tr-none"
                            : "bg-white text-stone-800 rounded-tl-none border border-bento-border shadow-sm"
                        }`}
                      >
                        {msg.content}
                      </div>
                      <span className="text-[9px] text-stone-400 font-mono block text-right px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    <div className="w-7 h-7 rounded-lg bg-white text-bento-maroon border border-bento-border flex items-center justify-center flex-shrink-0">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-bento-maroon" />
                    </div>
                    <div className="bg-white border border-bento-border p-3.5 rounded-2xl rounded-tl-none flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 bg-bento-gold rounded-full animate-bounce duration-500 [animation-delay:0s]"></span>
                      <span className="w-1.5 h-1.5 bg-bento-gold rounded-full animate-bounce duration-500 [animation-delay:0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-bento-gold rounded-full animate-bounce duration-500 [animation-delay:0.3s]"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions list (only visible when not loading) */}
            {!isLoading && messages.length <= 2 && (
              <div className="p-3 bg-white/60 border-t border-bento-border/50 flex flex-wrap gap-2">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(sug)}
                    className="text-[11px] bg-white border border-bento-border hover:border-bento-maroon text-stone-700 hover:text-bento-maroon px-2.5 py-1.5 rounded-xl cursor-pointer transition-colors flex items-center space-x-1"
                  >
                    <HelpCircle className="w-3 h-3 text-bento-maroon" />
                    <span>{sug}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Chat form footer */}
            <div className="p-3.5 bg-white border-t border-bento-border flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage(input);
                }}
                disabled={isLoading}
                placeholder="Ask me anything..."
                className="flex-grow bg-[#FAF9F6] border border-bento-border focus:border-bento-maroon rounded-xl px-3.5 py-2.5 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors"
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-bento-gold hover:bg-[#eac44e] disabled:bg-stone-100 text-bento-maroon-deep disabled:text-stone-400 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
