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
            const reply = await sendMessage(chatId, messages, content);

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: reply,
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, botMsg]);
        } finally {
            setIsTyping(false);
        }
    }, [chatId, messages]);

    return {
        isOpen,
        toggleOpen,
        messages,
        addMessage,
        isTyping,
    };
};
