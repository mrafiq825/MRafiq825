import { useMemo, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PORTFOLIO_CONTEXT } from "~/data/chatbotContext";

export type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  time: string;
};

type GeminiHistoryEntry = {
  role: "user" | "model";
  parts: Array<{ text: string }>;
};

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as
  | string
  | undefined;
const GEMINI_MODEL =
  (import.meta.env.VITE_GEMINI_MODEL as string | undefined) ||
  "gemini-2.5-flash";

const getCurrentTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const createChatMessage = (
  role: ChatMessage["role"],
  text: string,
): ChatMessage => ({
  id: Date.now() + Math.floor(Math.random() * 1000),
  role,
  text,
  time: getCurrentTime(),
});

export const useGeminiChat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<GeminiHistoryEntry[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    createChatMessage(
      "assistant",
      "Hi! I'm the portfolio assistant powered by Google Gemini. Ask me about Muhammad Rafiq's experience, skills, projects, or availability. I can answer questions about his work and expertise!",
    ),
  ]);

  const genAI = useMemo(
    () => (GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null),
    [],
  );

  const model = useMemo(
    () => genAI?.getGenerativeModel({ model: GEMINI_MODEL }) ?? null,
    [genAI],
  );

  const sendChatMessage = async (text: string) => {
    const trimmedText = text.trim();

    if (!trimmedText || isLoading) {
      return;
    }

    if (!GEMINI_API_KEY || !model) {
      const errorMessage = createChatMessage(
        "assistant",
        "Error: Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your .env.local file.",
      );
      setChatMessages((currentMessages) => [...currentMessages, errorMessage]);
      return;
    }

    const nextUserMessage = createChatMessage("user", trimmedText);
    setChatMessages((currentMessages) => [...currentMessages, nextUserMessage]);
    setIsLoading(true);

    try {
      const chat = model.startChat({ history: chatHistory });

      const result = await chat.sendMessage(
        `${PORTFOLIO_CONTEXT}\n\nUser question: ${trimmedText}`,
      );
      const response = result.response.text();

      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          role: "user",
          parts: [{ text: trimmedText }],
        },
        {
          role: "model",
          parts: [{ text: response }],
        },
      ]);

      const assistantMessage = createChatMessage("assistant", response);
      setChatMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    } catch (error) {
      const errorMessage = createChatMessage(
        "assistant",
        "Sorry, I encountered an error. Please try again later or contact directly at rafkhan9323@gmail.com.",
      );
      setChatMessages((currentMessages) => [...currentMessages, errorMessage]);
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    chatMessages,
    isLoading,
    sendChatMessage,
  };
};
