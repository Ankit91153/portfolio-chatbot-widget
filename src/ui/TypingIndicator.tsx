import { motion } from "framer-motion";

export const TypingIndicator = () => {
    return (
        <div className="flex space-x-1 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 bg-gray-400 rounded-full"
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
