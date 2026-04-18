import { json, type ActionFunction } from "@react-router/node";
import { getPortfolioChatResponse } from "~/lib/geminiAI.server";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return json(
        { error: "Invalid request body. Message is required." },
        { status: 400 },
      );
    }

    if (!process.env.VITE_GEMINI_API_KEY) {
      console.error("VITE_GEMINI_API_KEY is not set");
      return json({ error: "AI service not configured" }, { status: 500 });
    }

    const response = await getPortfolioChatResponse(message);

    return json({ response });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to get response from AI",
      },
      { status: 500 },
    );
  }
};
