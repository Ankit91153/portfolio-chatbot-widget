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
            className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer relative"
            style={{
                backgroundColor: theme.buttonBackgroundColor,
                color: theme.buttonIconColor,
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
