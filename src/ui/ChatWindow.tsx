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
                    className="w-[calc(100vw-32px)] md:w-[380px] h-[500px] max-h-[80vh] flex flex-col overflow-hidden mb-4"
                    style={{
                        borderRadius: theme.borderRadius,
                        backgroundColor: theme.windowBackgroundColor,
                        border: `1px solid ${theme.windowBorderColor}`,
                        boxShadow: `0 25px 50px -12px ${theme.windowShadowColor}`
                    }}
                >
                    {/* Header */}
                    <div
                        className="flex items-center justify-between p-4"
                        style={{
                            backgroundColor: theme.headerBackgroundColor,
                            borderBottom: `1px solid ${theme.headerBorderColor}`
                        }}
                    >
                        <h3 
                            className="font-semibold text-lg" 
                            style={{ color: theme.headerTextColor }}
                        >
                            Chat with Portfolio
                        </h3>
                        <button 
                            onClick={onClose} 
                            className="p-1 rounded-full transition-colors hover:opacity-80"
                            style={{ color: theme.headerCloseButtonColor }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = theme.headerCloseButtonHoverColor;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = theme.headerCloseButtonColor;
                            }}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div 
                        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
                        style={{ 
                            backgroundColor: theme.messageAreaBackgroundColor,
                            // Custom scrollbar styles
                            scrollbarWidth: 'thin',
                            scrollbarColor: `${theme.scrollbarThumbColor} ${theme.scrollbarTrackColor}`
                        }}
                    >
                        <style jsx>{`
                            .custom-scrollbar::-webkit-scrollbar {
                                width: 6px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                                background: ${theme.scrollbarTrackColor};
                                border-radius: 3px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                background: ${theme.scrollbarThumbColor};
                                border-radius: 3px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                background: ${theme.scrollbarThumbHoverColor};
                            }
                        `}</style>
                        
                        {messages.map((msg) => (
                            <MessageBubble
                                key={msg.id}
                                message={msg}
                                theme={theme}
                            />
                        ))}
                        {isTyping && <TypingIndicator theme={theme} />}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form 
                        onSubmit={handleSubmit} 
                        className="p-4"
                        style={{
                            backgroundColor: theme.inputSectionBackgroundColor,
                            borderTop: `1px solid ${theme.inputSectionBorderColor}`
                        }}
                    >
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={config.placeholder || "Ask me anything..."}
                                className="w-full px-4 py-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 transition-all"
                                style={{
                                    backgroundColor: theme.inputBackgroundColor,
                                    color: theme.inputTextColor,
                                    borderColor: theme.inputBorderColor,
                                    borderRadius: theme.borderRadius
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = theme.inputFocusBorderColor;
                                    e.target.style.boxShadow = `0 0 0 3px ${theme.inputFocusRingColor}20`;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = theme.inputBorderColor;
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            <style jsx>{`
                                input::placeholder {
                                    color: ${theme.inputPlaceholderColor};
                                }
                            `}</style>
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute right-2 p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
                                style={{ 
                                    color: !inputValue.trim() || isTyping 
                                        ? theme.sendButtonDisabledColor 
                                        : theme.sendButtonColor
                                }}
                                onMouseEnter={(e) => {
                                    if (!(!inputValue.trim() || isTyping)) {
                                        e.currentTarget.style.color = theme.sendButtonHoverColor;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!(!inputValue.trim() || isTyping)) {
                                        e.currentTarget.style.color = theme.sendButtonColor;
                                    }
                                }}
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
