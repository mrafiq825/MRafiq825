import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getChatbotPrompt } from "~/data/chatbotContext";

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid request body. Message is required." },
        { status: 400 }
      );
    }

    if (!GEMINI_API_KEY || !genAI) {
      console.error("Gemini API key is not configured");
      return NextResponse.json(
        { error: "AI service not configured on the server" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(
      `${getChatbotPrompt(message)}\n\nUser question: ${message}`
    );
    const responseText = result.response.text();

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to get response from AI",
      },
      { status: 500 }
    );
  }
}
