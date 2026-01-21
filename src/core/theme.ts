
import { ThemeConfig } from "./types";

export type ResolvedTheme = {
    borderRadius: string;
    primary: string;
    background: string;
    text: string;

    headerBackgroundColor: string;
    headerTextColor: string;

    botMessageBackgroundColor: string;
    botMessageTextColor: string;
    userMessageBackgroundColor: string;
    userMessageTextColor: string;

    inputBackgroundColor: string;
    inputTextColor: string;
    inputPlaceholderColor: string;
    inputBorderColor: string;

    buttonBackgroundColor: string;
    buttonIconColor: string;
};

export const resolveTheme = (theme: ThemeConfig | undefined): ResolvedTheme => {
    // Base Defaults
    const defaultPrimary = "#6366f1";     // Indigo-500
    const defaultBackground = "#ffffff";  // White
    const defaultText = "#111827";        // Gray-900

    // Resolved Base Values
    const primary = theme?.primary || defaultPrimary;
    const background = theme?.background || defaultBackground;
    const text = theme?.text || defaultText;

    return {
        borderRadius: theme?.borderRadius || "1rem",
        primary,
        background,
        text,

        // Header
        headerBackgroundColor: theme?.headerBackgroundColor || background,
        headerTextColor: theme?.headerTextColor || text,

        // Bot Message
        botMessageBackgroundColor: theme?.botMessageBackgroundColor || "rgba(0, 0, 0, 0.05)", // Subtle gray
        botMessageTextColor: theme?.botMessageTextColor || text,

        // User Message
        userMessageBackgroundColor: theme?.userMessageBackgroundColor || primary,
        userMessageTextColor: theme?.userMessageTextColor || "#ffffff",

        // Input
        inputBackgroundColor: theme?.inputBackgroundColor || "rgba(0, 0, 0, 0.03)",
        inputTextColor: theme?.inputTextColor || text,
        inputPlaceholderColor: theme?.inputPlaceholderColor || "rgba(0, 0, 0, 0.4)",
        inputBorderColor: theme?.inputBorderColor || "transparent",

        // Button
        buttonBackgroundColor: theme?.buttonBackgroundColor || primary,
        buttonIconColor: theme?.buttonIconColor || "#ffffff",
    };
};
