export type ThemeConfig = {
    // Core Layout
    borderRadius?: string;

    // Primary Colors
    primary?: string;       // Button bg, User bubble bg

    // Window / Container
    background?: string;    // Chat window bg (and fallback for others)
    text?: string;          // Main text color

    // Header
    headerBackgroundColor?: string;
    headerTextColor?: string;

    // Messages
    botMessageBackgroundColor?: string;
    botMessageTextColor?: string;
    userMessageBackgroundColor?: string;
    userMessageTextColor?: string;

    // Input Area
    inputBackgroundColor?: string;
    inputTextColor?: string;
    inputPlaceholderColor?: string;
    inputBorderColor?: string;

    // Toggle Button
    buttonBackgroundColor?: string;
    buttonIconColor?: string;
};

export type PortfolioChatbotConfig = {
    chatId: string;
    theme?: ThemeConfig;
    position?: "bottom-right" | "bottom-left";
    welcomeMessage?: string;
    placeholder?: string;
    animation?: "slide" | "fade" | "scale";
};

export type Message = {
    id: string;
    role: "user" | "bot";
    content: string;
    timestamp: number;
};
