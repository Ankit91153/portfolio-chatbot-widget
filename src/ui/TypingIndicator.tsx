import { motion } from "framer-motion";
import { ResolvedTheme } from "../core/theme";

type TypingIndicatorProps = {
    theme: ResolvedTheme;
};

export const TypingIndicator = ({ theme }: TypingIndicatorProps) => {
    return (
        <div 
            className="flex space-x-1 p-3 rounded-lg w-fit"
            style={{
                backgroundColor: theme.typingIndicatorBackgroundColor,
                borderRadius: theme.borderRadius,
                border: `1px solid ${theme.botMessageBorderColor}`
            }}
        >
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: theme.typingIndicatorColor }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
};
