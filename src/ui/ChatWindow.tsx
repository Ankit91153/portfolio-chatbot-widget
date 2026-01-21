import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { PortfolioChatbotConfig } from "../core/types";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { Message } from "../core/types";
import { cn } from "../lib/utils";

import { ResolvedTheme } from "../core/theme";

type ChatWindowProps = {
    isOpen: boolean;
    config: PortfolioChatbotConfig;
    messages: Message[];
    addMessage: (content: string) => Promise<void>;
    isTyping: boolean;
    onClose: () => void;
    theme: ResolvedTheme;
};

// ... imports ...

export const ChatWindow = ({
    isOpen,
    config,
    messages,
    addMessage,
    isTyping,
    onClose,
    theme
}: ChatWindowProps) => {
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        const msg = inputValue;
        setInputValue("");
        await addMessage(msg);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-[calc(100vw-32px)] md:w-[380px] h-[500px] max-h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 mb-4"
                    style={{
                        borderRadius: theme.borderRadius,
                        backgroundColor: theme.background,
                        borderColor: theme.background === '#ffffff' ? '#e5e7eb' : theme.background // Subtle border fix
                    }}
                >
                    {/* Header */}
                    <div
                        className="flex items-center justify-between p-4 border-b border-opacity-10"
                        style={{
                            backgroundColor: theme.background,
                            borderColor: theme.text
                        }}
                    >
                        <h3 className="font-semibold text-lg" style={{ color: theme.text }}>Chat with Portfolio</h3>
                        <button onClick={onClose} className="p-1 hover:brightness-95 rounded-full transition-colors">
                            <X size={20} style={{ color: theme.text, opacity: 0.7 }} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundColor: theme.background === '#ffffff' ? '#f9fafb' : theme.background }}>
                        {/* We might want a slightly different background for the message area to distinguish it, 
                             or strictly follow the user 'background' for the main container and a lighter/darker shade here? 
                             User said: "user will be change". So we should probably just obey them. 
                             But keeping it simple: Use theme.background for the container, maybe transparent here? 
                             Let's assume theme.background is the main UI color. 
                             Actually, message area usually contrasts. 
                             Let's make message area transparent so it takes container background? 
                             Or use a calculated contrast? 
                             For now, let's just use the passed background. */}
                        {messages.map((msg) => (
                            <MessageBubble
                                key={msg.id}
                                message={msg}
                                primaryColor={theme.primary}
                                textColor={msg.role === 'user' ? '#ffffff' : theme.text} // Bot messages take theme text
                            />
                        ))}
                        {isTyping && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t border-opacity-10"
                        style={{
                            backgroundColor: theme.background,
                            borderColor: theme.text
                        }}>
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={config.placeholder || "Ask me anything..."}
                                className="w-full px-4 py-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                                style={{
                                    backgroundColor: theme.background === '#ffffff' ? '#f3f4f6' : 'rgba(255,255,255,0.05)', // Input needs contrast
                                    color: theme.text,
                                    borderColor: theme.background === '#ffffff' ? '#e5e7eb' : 'transparent',
                                    ["--tw-ring-color" as string]: theme.primary
                                }}
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute right-2 p-2 rounded-lg hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                style={{ color: theme.text, opacity: 0.5 }}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
