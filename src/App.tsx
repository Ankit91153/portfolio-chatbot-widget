import { PortfolioChatbotConfig } from "./core/types";
import { resolveTheme, ResolvedTheme } from "./core/theme";
import { useChatState } from "./core/state";
import { ChatButton } from "./ui/ChatButton";
import { ChatWindow } from "./ui/ChatWindow";
import { cn } from "./lib/utils";

type AppProps = {
    config: PortfolioChatbotConfig;
};

export const App = ({ config }: AppProps) => {
    const { isOpen, toggleOpen, messages, addMessage, isTyping } = useChatState(
        config.chatId,
        config.welcomeMessage
    );

    const resolvedTheme: ResolvedTheme = resolveTheme(config.theme);
    const isLeft = config.position === "bottom-left";

    return (
        <div
            className={cn(
                "portfolio-chatbot-container fixed z-99999 font-sans antialiased flex flex-col gap-4",
                isLeft ? "bottom-4 left-4 items-start" : "bottom-4 right-4 items-end"
            )}
        >
            <ChatWindow
                isOpen={isOpen}
                config={config}
                messages={messages}
                addMessage={addMessage}
                isTyping={isTyping}
                onClose={toggleOpen}
                theme={resolvedTheme}
            />
            <ChatButton isOpen={isOpen} toggleOpen={toggleOpen} theme={resolvedTheme} />
        </div>
    );
};
