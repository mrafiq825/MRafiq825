import { useState } from "react";

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
      "Hi! I'm Rafiq assistant. Ask me about Muhammad Rafiq's experience, skills, projects, or availability. I can answer questions about his work and expertise!",
    ),
  ]);

  const sendChatMessage = async (text: string) => {
    const trimmedText = text.trim();

    if (!trimmedText || isLoading) {
      return;
    }

    const nextUserMessage = createChatMessage("user", trimmedText);
    setChatMessages((currentMessages) => [...currentMessages, nextUserMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedText,
          history: chatHistory,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to communicate with AI endpoint");
      }

      const data = await res.json();
      const response = data.response;

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
