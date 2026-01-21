import { useState, useCallback } from "react";
import { Message } from "./types";
import { sendMessage } from "./api";

export const useChatState = (chatId: string, initialWelcomeMessage?: string) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(
        initialWelcomeMessage
            ? [
                {
                    id: "welcome",
                    role: "bot",
                    content: initialWelcomeMessage,
                    timestamp: Date.now(),
                },
            ]
            : []
    );
    const [isTyping, setIsTyping] = useState(false);

    const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

    const addMessage = useCallback(async (content: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content,
            timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        try {
            // Simplified API call with just chatId and user message
            const answer: string = await sendMessage(chatId, content);

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: answer,
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            console.error("Error adding message:", error);
            
            // Add error message
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: "I'm sorry, I encountered an error while processing your request. Please try again.",
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    }, [chatId]);

    return {
        isOpen,
        toggleOpen,
        messages,
        addMessage,
        isTyping,
    };
};
