type ThemeConfig = {
    borderRadius?: string;
    primary?: string;
    background?: string;
    text?: string;
    headerBackgroundColor?: string;
    headerTextColor?: string;
    botMessageBackgroundColor?: string;
    botMessageTextColor?: string;
    userMessageBackgroundColor?: string;
    userMessageTextColor?: string;
    inputBackgroundColor?: string;
    inputTextColor?: string;
    inputPlaceholderColor?: string;
    inputBorderColor?: string;
    buttonBackgroundColor?: string;
    buttonIconColor?: string;
};
type PortfolioChatbotConfig = {
    chatId: string;
    theme?: ThemeConfig;
    position?: "bottom-right" | "bottom-left";
    welcomeMessage?: string;
    placeholder?: string;
    animation?: "slide" | "fade" | "scale";
};

declare const initPortfolioChatbot: (config: PortfolioChatbotConfig) => void;

export { initPortfolioChatbot };
