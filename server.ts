import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables from .env if present
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize the Google Gen AI client with User-Agent for telemetry
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("WARNING: GEMINI_API_KEY is not defined in the environment variables.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

const ai = getGeminiClient();

// Gemini Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid or missing messages in request body." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "Gemini API key is not configured on the server. Please add your key in the Secrets panel."
      });
    }

    // Map conversation history to Gemini format
    // Standard format is list of { role: 'user' | 'model', parts: [{ text: string }] }
    const geminiContents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: geminiContents,
      config: {
        systemInstruction: `You are 'Rahul Sweets & Namkeen Assistant', a warm, polite, and hospitable virtual assistant for Rahul Sweets & Namkeen, a premium, luxury sweet and namkeen shop located in Kanpur, Uttar Pradesh (121 637, Sabji Mandi Rd, Industrial Estate, Vijay Nagar, Shastri Nagar, Kanpur, Uttar Pradesh 208005).
Your tone should be celebratory, friendly, respectful, and traditional yet modern—reflecting the rich heritage of Indian hospitality (using terms like "Namaste", "Pranam", or "Welcome to Rahul Sweets & Namkeen").

Provide answers based on the following brand facts:
- Business Name: Rahul Sweets & Namkeen
- Address: 121 637, Sabji Mandi Rd, Industrial Estate, Vijay Nagar, Shastri Nagar, Kanpur, Uttar Pradesh 208005
- Google Location: Sabji Mandi Rd, Shastri Nagar, Kanpur, Uttar Pradesh
- Contact Phone: 07275141414
- Google Rating: 4.1 Stars ⭐, highly loved by locals for authentic taste, variety of sweets and namkeens, and cleanliness.
- Key Sweet Specialities: Kaju Katli (rich and melt-in-the-mouth), Rasgulla (spongy and juicy), Gulab Jamun (warm and soft), Motichoor Laddu, Besan Laddu, Barfi (Mawa and Kaju), Peda (traditional Mathura style), and hot crispy Jalebi.
- Special Offerings: Festive Sweets, custom Premium Gift Boxes, Namkeens (savoury mixtures, mathri), and Celebration Orders (for weddings, birthdays, baby showers, and family functions).
- Core Brand Pillars: Fresh daily preparation, premium high-quality ingredients (pure ghee, fresh mawa), strict hygiene, traditional recipes, and authentic taste.

Encourage users to:
1. Call us directly at 07275141414 to place catering or festival box orders.
2. Visit our shop in Shastri Nagar, Kanpur to enjoy fresh sweets.
3. Explore our sweet catalog.

Be concise, warm, helpful, and sweet! Keep answers focused on sweet delicacies, gifting, celebrations, and directions. Avoid speaking about unrelated topics.`,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I am here to assist you with Rahul Sweets & Namkeen. How may I sweeten your day?";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Error in /api/chat endpoint:", error);
    return res.status(500).json({
      error: "An error occurred while talking to the Gemini assistant.",
      details: error.message || error
    });
  }
});

// Serve Vite dev server or static distribution files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Rahul Sweets & Namkeen Backend] Server is running on http://localhost:${PORT}`);
  });
}

startServer();
