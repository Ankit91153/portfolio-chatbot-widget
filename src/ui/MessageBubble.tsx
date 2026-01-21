import { Message } from "../core/types";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

import { ResolvedTheme } from "../core/theme";

type MessageBubbleProps = {
    message: Message;
    theme: ResolvedTheme;
};

export const MessageBubble = ({ message, theme }: MessageBubbleProps) => {
    const isUser = message.role === "user";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={cn(
                "flex w-full mb-4",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "max-w-[80%] px-4 py-2 text-sm shadow-sm",
                    isUser
                        ? "rounded-br-none"
                        : "rounded-bl-none"
                )}
                style={{
                    borderRadius: theme.borderRadius,
                    backgroundColor: isUser 
                        ? theme.userMessageBackgroundColor 
                        : theme.botMessageBackgroundColor,
                    color: isUser 
                        ? theme.userMessageTextColor 
                        : theme.botMessageTextColor,
                    border: `1px solid ${isUser 
                        ? theme.userMessageBorderColor 
                        : theme.botMessageBorderColor}`,
                    ...(isUser 
                        ? { borderBottomRightRadius: '4px' }
                        : { borderBottomLeftRadius: '4px' })
                }}
            >
                {message.content}
            </div>
        </motion.div>
    );
};
