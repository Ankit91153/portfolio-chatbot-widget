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

    // Theme resolution logic
    const [resolvedMode, setResolvedMode] = useState<"light" | "dark">("light");

    useEffect(() => {
        const mode = config.theme?.mode || "system";
        if (mode === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            setResolvedMode(mediaQuery.matches ? "dark" : "light");

            const handler = (e: MediaQueryListEvent) => {
                setResolvedMode(e.matches ? "dark" : "light");
            };
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        } else {
            setResolvedMode(mode);
        }
    }, [config.theme?.mode]);

    const resolvedTheme: ResolvedTheme = resolveTheme(config.theme, resolvedMode);
    const isLeft = config.position === "bottom-left";

    return (
        <div
            className={cn(
                "portfolio-chatbot-container fixed z-[99999] font-sans antialiased flex flex-col gap-4 invisible", // Invisible wrapper initially to prevent flash? No, just layout.
                // Apply dark class here for Scoped Tailwind Dark Mode
                resolvedMode === "dark" && "dark",
                isLeft ? "bottom-4 left-4 items-start" : "bottom-4 right-4 items-end",
                // Re-enable visibility for children
                "[&>*]:visible"
            )}
        // Ensure wrapper itself doesn't block clicks in empty space if large (though flex shrinks it)
        // Actually flex container size equals content size, so it's fine.
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
