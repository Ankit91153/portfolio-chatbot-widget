
import { ThemeConfig } from "./types";

export type ResolvedTheme = {
    borderRadius: string;

    // Chat Window Container
    windowBackgroundColor: string;
    windowBorderColor: string;
    windowShadowColor: string;

    // Header Section
    headerBackgroundColor: string;
    headerTextColor: string;
    headerBorderColor: string;
    headerCloseButtonColor: string;
    headerCloseButtonHoverColor: string;

    // Message Area
    messageAreaBackgroundColor: string;
    
    // Bot Messages
    botMessageBackgroundColor: string;
    botMessageTextColor: string;
    botMessageBorderColor: string;

    // User Messages  
    userMessageBackgroundColor: string;
    userMessageTextColor: string;
    userMessageBorderColor: string;

    // Input Section
    inputSectionBackgroundColor: string;
    inputSectionBorderColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
    inputPlaceholderColor: string;
    inputBorderColor: string;
    inputFocusBorderColor: string;
    inputFocusRingColor: string;

    // Send Button
    sendButtonColor: string;
    sendButtonHoverColor: string;
    sendButtonDisabledColor: string;

    // Chat Toggle Button
    toggleButtonBackgroundColor: string;
    toggleButtonIconColor: string;
    toggleButtonHoverBackgroundColor: string;
    toggleButtonShadowColor: string;

    // Typing Indicator
    typingIndicatorColor: string;
    typingIndicatorBackgroundColor: string;

    // Scrollbar
    scrollbarTrackColor: string;
    scrollbarThumbColor: string;
    scrollbarThumbHoverColor: string;
};

export const resolveTheme = (theme: ThemeConfig | undefined): ResolvedTheme => {
    // Default color palette - clean, modern defaults
    const defaults = {
        // Base colors
        white: "#ffffff",
        black: "#000000",
        gray50: "#f9fafb",
        gray100: "#f3f4f6",
        gray200: "#e5e7eb",
        gray300: "#d1d5db",
        gray400: "#9ca3af",
        gray500: "#6b7280",
        gray600: "#4b5563",
        gray700: "#374151",
        gray800: "#1f2937",
        gray900: "#111827",
        blue500: "#3b82f6",
        blue600: "#2563eb",
        blue700: "#1d4ed8",
        indigo500: "#6366f1",
        indigo600: "#4f46e5",
        green500: "#10b981",
        red500: "#ef4444",
    };

    return {
        borderRadius: theme?.borderRadius || "1rem",

        // Chat Window Container
        windowBackgroundColor: theme?.windowBackgroundColor || defaults.white,
        windowBorderColor: theme?.windowBorderColor || defaults.gray200,
        windowShadowColor: theme?.windowShadowColor || "rgba(0, 0, 0, 0.1)",

        // Header Section
        headerBackgroundColor: theme?.headerBackgroundColor || defaults.white,
        headerTextColor: theme?.headerTextColor || defaults.gray900,
        headerBorderColor: theme?.headerBorderColor || defaults.gray200,
        headerCloseButtonColor: theme?.headerCloseButtonColor || defaults.gray500,
        headerCloseButtonHoverColor: theme?.headerCloseButtonHoverColor || defaults.gray700,

        // Message Area
        messageAreaBackgroundColor: theme?.messageAreaBackgroundColor || defaults.gray50,
        
        // Bot Messages
        botMessageBackgroundColor: theme?.botMessageBackgroundColor || defaults.white,
        botMessageTextColor: theme?.botMessageTextColor || defaults.gray900,
        botMessageBorderColor: theme?.botMessageBorderColor || defaults.gray200,

        // User Messages  
        userMessageBackgroundColor: theme?.userMessageBackgroundColor || defaults.blue500,
        userMessageTextColor: theme?.userMessageTextColor || defaults.white,
        userMessageBorderColor: theme?.userMessageBorderColor || defaults.blue600,

        // Input Section
        inputSectionBackgroundColor: theme?.inputSectionBackgroundColor || defaults.white,
        inputSectionBorderColor: theme?.inputSectionBorderColor || defaults.gray200,
        inputBackgroundColor: theme?.inputBackgroundColor || defaults.gray50,
        inputTextColor: theme?.inputTextColor || defaults.gray900,
        inputPlaceholderColor: theme?.inputPlaceholderColor || defaults.gray400,
        inputBorderColor: theme?.inputBorderColor || defaults.gray300,
        inputFocusBorderColor: theme?.inputFocusBorderColor || defaults.blue500,
        inputFocusRingColor: theme?.inputFocusRingColor || defaults.blue500,

        // Send Button
        sendButtonColor: theme?.sendButtonColor || defaults.gray500,
        sendButtonHoverColor: theme?.sendButtonHoverColor || defaults.blue500,
        sendButtonDisabledColor: theme?.sendButtonDisabledColor || defaults.gray300,

        // Chat Toggle Button
        toggleButtonBackgroundColor: theme?.toggleButtonBackgroundColor || defaults.blue500,
        toggleButtonIconColor: theme?.toggleButtonIconColor || defaults.white,
        toggleButtonHoverBackgroundColor: theme?.toggleButtonHoverBackgroundColor || defaults.blue600,
        toggleButtonShadowColor: theme?.toggleButtonShadowColor || "rgba(59, 130, 246, 0.3)",

        // Typing Indicator
        typingIndicatorColor: theme?.typingIndicatorColor || defaults.gray400,
        typingIndicatorBackgroundColor: theme?.typingIndicatorBackgroundColor || defaults.white,

        // Scrollbar
        scrollbarTrackColor: theme?.scrollbarTrackColor || defaults.gray100,
        scrollbarThumbColor: theme?.scrollbarThumbColor || defaults.gray300,
        scrollbarThumbHoverColor: theme?.scrollbarThumbHoverColor || defaults.gray400,
    };
};
