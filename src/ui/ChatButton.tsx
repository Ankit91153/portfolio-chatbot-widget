import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { ResolvedTheme } from "../core/theme";

type ChatButtonProps = {
    isOpen: boolean;
    toggleOpen: () => void;
    theme: ResolvedTheme;
};

export const ChatButton = ({ isOpen, toggleOpen, theme }: ChatButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleOpen}
            className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer relative transition-colors"
            style={{
                backgroundColor: theme.toggleButtonBackgroundColor,
                color: theme.toggleButtonIconColor,
                boxShadow: `0 10px 25px ${theme.toggleButtonShadowColor}`,
                borderRadius: theme.borderRadius
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.toggleButtonHoverBackgroundColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.toggleButtonBackgroundColor;
            }}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0 : 1 }}
                className="absolute"
            >
                <MessageCircle size={28} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 0 : -90, scale: isOpen ? 1 : 0 }}
                className="absolute"
            >
                <X size={28} />
            </motion.div>
        </motion.button>
    );
};
