import { ThemeConfig } from "./types";

/**
 * Helper function to create a dark theme configuration
 */
export const createDarkTheme = (accentColor: string = "#3b82f6"): ThemeConfig => ({
    borderRadius: "1rem",
    
    // Window
    windowBackgroundColor: "#1f2937",
    windowBorderColor: "#374151",
    windowShadowColor: "rgba(0, 0, 0, 0.5)",
    
    // Header
    headerBackgroundColor: "#111827",
    headerTextColor: "#f9fafb",
    headerBorderColor: "#374151",
    headerCloseButtonColor: "#9ca3af",
    headerCloseButtonHoverColor: "#f3f4f6",
    
    // Messages
    messageAreaBackgroundColor: "#1f2937",
    botMessageBackgroundColor: "#374151",
    botMessageTextColor: "#f9fafb",
    botMessageBorderColor: "#4b5563",
    userMessageBackgroundColor: accentColor,
    userMessageTextColor: "#ffffff",
    userMessageBorderColor: accentColor,
    
    // Input
    inputSectionBackgroundColor: "#111827",
    inputSectionBorderColor: "#374151",
    inputBackgroundColor: "#374151",
    inputTextColor: "#f9fafb",
    inputPlaceholderColor: "#9ca3af",
    inputBorderColor: "#4b5563",
    inputFocusBorderColor: accentColor,
    inputFocusRingColor: accentColor,
    
    // Buttons
    sendButtonColor: "#9ca3af",
    sendButtonHoverColor: accentColor,
    sendButtonDisabledColor: "#6b7280",
    toggleButtonBackgroundColor: accentColor,
    toggleButtonIconColor: "#ffffff",
    toggleButtonHoverBackgroundColor: accentColor,
    toggleButtonShadowColor: `${accentColor}40`,
    
    // Typing
    typingIndicatorColor: "#9ca3af",
    typingIndicatorBackgroundColor: "#374151",
    
    // Scrollbar
    scrollbarTrackColor: "#374151",
    scrollbarThumbColor: "#4b5563",
    scrollbarThumbHoverColor: "#6b7280",
});

/**
 * Helper function to create a light theme configuration
 */
export const createLightTheme = (accentColor: string = "#3b82f6"): ThemeConfig => ({
    borderRadius: "1rem",
    
    // Window
    windowBackgroundColor: "#ffffff",
    windowBorderColor: "#e5e7eb",
    windowShadowColor: "rgba(0, 0, 0, 0.1)",
    
    // Header
    headerBackgroundColor: "#ffffff",
    headerTextColor: "#111827",
    headerBorderColor: "#e5e7eb",
    headerCloseButtonColor: "#6b7280",
    headerCloseButtonHoverColor: "#374151",
    
    // Messages
    messageAreaBackgroundColor: "#f9fafb",
    botMessageBackgroundColor: "#ffffff",
    botMessageTextColor: "#111827",
    botMessageBorderColor: "#e5e7eb",
    userMessageBackgroundColor: accentColor,
    userMessageTextColor: "#ffffff",
    userMessageBorderColor: accentColor,
    
    // Input
    inputSectionBackgroundColor: "#ffffff",
    inputSectionBorderColor: "#e5e7eb",
    inputBackgroundColor: "#f9fafb",
    inputTextColor: "#111827",
    inputPlaceholderColor: "#9ca3af",
    inputBorderColor: "#d1d5db",
    inputFocusBorderColor: accentColor,
    inputFocusRingColor: accentColor,
    
    // Buttons
    sendButtonColor: "#6b7280",
    sendButtonHoverColor: accentColor,
    sendButtonDisabledColor: "#d1d5db",
    toggleButtonBackgroundColor: accentColor,
    toggleButtonIconColor: "#ffffff",
    toggleButtonHoverBackgroundColor: accentColor,
    toggleButtonShadowColor: `${accentColor}30`,
    
    // Typing
    typingIndicatorColor: "#9ca3af",
    typingIndicatorBackgroundColor: "#ffffff",
    
    // Scrollbar
    scrollbarTrackColor: "#f3f4f6",
    scrollbarThumbColor: "#d1d5db",
    scrollbarThumbHoverColor: "#9ca3af",
});

/**
 * Helper function to create a minimal theme configuration
 */
export const createMinimalTheme = (accentColor: string = "#000000"): ThemeConfig => ({
    borderRadius: "0.5rem",
    
    // Window
    windowBackgroundColor: "#ffffff",
    windowBorderColor: "#f3f4f6",
    windowShadowColor: "rgba(0, 0, 0, 0.05)",
    
    // Header
    headerBackgroundColor: "#ffffff",
    headerTextColor: "#000000",
    headerBorderColor: "#f3f4f6",
    headerCloseButtonColor: "#6b7280",
    headerCloseButtonHoverColor: "#000000",
    
    // Messages
    messageAreaBackgroundColor: "#ffffff",
    botMessageBackgroundColor: "#f9fafb",
    botMessageTextColor: "#000000",
    botMessageBorderColor: "transparent",
    userMessageBackgroundColor: accentColor,
    userMessageTextColor: "#ffffff",
    userMessageBorderColor: "transparent",
    
    // Input
    inputSectionBackgroundColor: "#ffffff",
    inputSectionBorderColor: "#f3f4f6",
    inputBackgroundColor: "#f9fafb",
    inputTextColor: "#000000",
    inputPlaceholderColor: "#9ca3af",
    inputBorderColor: "transparent",
    inputFocusBorderColor: accentColor,
    inputFocusRingColor: accentColor,
    
    // Buttons
    sendButtonColor: "#6b7280",
    sendButtonHoverColor: accentColor,
    sendButtonDisabledColor: "#d1d5db",
    toggleButtonBackgroundColor: accentColor,
    toggleButtonIconColor: "#ffffff",
    toggleButtonHoverBackgroundColor: "#374151",
    toggleButtonShadowColor: "rgba(0, 0, 0, 0.1)",
    
    // Typing
    typingIndicatorColor: "#9ca3af",
    typingIndicatorBackgroundColor: "#f9fafb",
    
    // Scrollbar
    scrollbarTrackColor: "#f9fafb",
    scrollbarThumbColor: "#e5e7eb",
    scrollbarThumbHoverColor: "#d1d5db",
});

/**
 * Helper function to create a brand theme with your company colors
 */
export const createBrandTheme = (
    primaryColor: string,
    secondaryColor?: string,
    backgroundColor?: string
): ThemeConfig => {
    const bg = backgroundColor || "#ffffff";
    const secondary = secondaryColor || primaryColor;
    
    return {
        borderRadius: "0.75rem",
        
        // Window
        windowBackgroundColor: bg,
        windowBorderColor: primaryColor,
        windowShadowColor: `${primaryColor}20`,
        
        // Header
        headerBackgroundColor: primaryColor,
        headerTextColor: "#ffffff",
        headerBorderColor: secondary,
        headerCloseButtonColor: "#ffffff",
        headerCloseButtonHoverColor: "#f3f4f6",
        
        // Messages
        messageAreaBackgroundColor: bg,
        botMessageBackgroundColor: "#f8fafc",
        botMessageTextColor: "#1e293b",
        botMessageBorderColor: "#e2e8f0",
        userMessageBackgroundColor: primaryColor,
        userMessageTextColor: "#ffffff",
        userMessageBorderColor: secondary,
        
        // Input
        inputSectionBackgroundColor: bg,
        inputSectionBorderColor: "#e2e8f0",
        inputBackgroundColor: "#f8fafc",
        inputTextColor: "#1e293b",
        inputPlaceholderColor: "#64748b",
        inputBorderColor: "#e2e8f0",
        inputFocusBorderColor: primaryColor,
        inputFocusRingColor: primaryColor,
        
        // Buttons
        sendButtonColor: "#64748b",
        sendButtonHoverColor: primaryColor,
        sendButtonDisabledColor: "#cbd5e1",
        toggleButtonBackgroundColor: primaryColor,
        toggleButtonIconColor: "#ffffff",
        toggleButtonHoverBackgroundColor: secondary,
        toggleButtonShadowColor: `${primaryColor}30`,
        
        // Typing
        typingIndicatorColor: "#64748b",
        typingIndicatorBackgroundColor: "#f8fafc",
        
        // Scrollbar
        scrollbarTrackColor: "#f1f5f9",
        scrollbarThumbColor: "#cbd5e1",
        scrollbarThumbHoverColor: "#94a3b8",
    };
};

/**
 * Helper to merge partial theme config with defaults
 */
export const mergeTheme = (baseTheme: ThemeConfig, overrides: Partial<ThemeConfig>): ThemeConfig => {
    return { ...baseTheme, ...overrides };
};