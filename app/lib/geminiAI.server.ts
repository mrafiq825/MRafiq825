import { GoogleGenerativeAI } from "@google/generative-ai";
import { getChatbotPrompt } from "~/data/chatbotContext";

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY!);

export async function getPortfolioChatResponse(userMessage: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: process.env.VITE_GEMINI_MODEL || "gemini-2.5-flash",
    });

    const chat = model.startChat({
      history: [],
    });

    const result = await chat.sendMessage(
      `${getChatbotPrompt(userMessage)}\n\nUser question: ${userMessage}`,
    );
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get response from AI");
  }
}
