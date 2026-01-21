import * as react_jsx_runtime from 'react/jsx-runtime';

type ThemeConfig = {
    borderRadius?: string;
    windowBackgroundColor?: string;
    windowBorderColor?: string;
    windowShadowColor?: string;
    headerBackgroundColor?: string;
    headerTextColor?: string;
    headerBorderColor?: string;
    headerCloseButtonColor?: string;
    headerCloseButtonHoverColor?: string;
    messageAreaBackgroundColor?: string;
    botMessageBackgroundColor?: string;
    botMessageTextColor?: string;
    botMessageBorderColor?: string;
    userMessageBackgroundColor?: string;
    userMessageTextColor?: string;
    userMessageBorderColor?: string;
    inputSectionBackgroundColor?: string;
    inputSectionBorderColor?: string;
    inputBackgroundColor?: string;
    inputTextColor?: string;
    inputPlaceholderColor?: string;
    inputBorderColor?: string;
    inputFocusBorderColor?: string;
    inputFocusRingColor?: string;
    sendButtonColor?: string;
    sendButtonHoverColor?: string;
    sendButtonDisabledColor?: string;
    toggleButtonBackgroundColor?: string;
    toggleButtonIconColor?: string;
    toggleButtonHoverBackgroundColor?: string;
    toggleButtonShadowColor?: string;
    typingIndicatorColor?: string;
    typingIndicatorBackgroundColor?: string;
    scrollbarTrackColor?: string;
    scrollbarThumbColor?: string;
    scrollbarThumbHoverColor?: string;
};
type PortfolioChatbotConfig = {
    chatId: string;
    theme?: ThemeConfig;
    position?: "bottom-right" | "bottom-left";
    welcomeMessage?: string;
    placeholder?: string;
    animation?: "slide" | "fade" | "scale";
};

type AppProps = {
    config: PortfolioChatbotConfig;
};
declare const App: ({ config }: AppProps) => react_jsx_runtime.JSX.Element;

type ResolvedTheme = {
    borderRadius: string;
    windowBackgroundColor: string;
    windowBorderColor: string;
    windowShadowColor: string;
    headerBackgroundColor: string;
    headerTextColor: string;
    headerBorderColor: string;
    headerCloseButtonColor: string;
    headerCloseButtonHoverColor: string;
    messageAreaBackgroundColor: string;
    botMessageBackgroundColor: string;
    botMessageTextColor: string;
    botMessageBorderColor: string;
    userMessageBackgroundColor: string;
    userMessageTextColor: string;
    userMessageBorderColor: string;
    inputSectionBackgroundColor: string;
    inputSectionBorderColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
    inputPlaceholderColor: string;
    inputBorderColor: string;
    inputFocusBorderColor: string;
    inputFocusRingColor: string;
    sendButtonColor: string;
    sendButtonHoverColor: string;
    sendButtonDisabledColor: string;
    toggleButtonBackgroundColor: string;
    toggleButtonIconColor: string;
    toggleButtonHoverBackgroundColor: string;
    toggleButtonShadowColor: string;
    typingIndicatorColor: string;
    typingIndicatorBackgroundColor: string;
    scrollbarTrackColor: string;
    scrollbarThumbColor: string;
    scrollbarThumbHoverColor: string;
};

/**
 * Helper function to create a dark theme configuration
 */
declare const createDarkTheme: (accentColor?: string) => ThemeConfig;
/**
 * Helper function to create a light theme configuration
 */
declare const createLightTheme: (accentColor?: string) => ThemeConfig;
/**
 * Helper function to create a minimal theme configuration
 */
declare const createMinimalTheme: (accentColor?: string) => ThemeConfig;
/**
 * Helper function to create a brand theme with your company colors
 */
declare const createBrandTheme: (primaryColor: string, secondaryColor?: string, backgroundColor?: string) => ThemeConfig;
/**
 * Helper to merge partial theme config with defaults
 */
declare const mergeTheme: (baseTheme: ThemeConfig, overrides: Partial<ThemeConfig>) => ThemeConfig;

declare const initPortfolioChatbot: (config: PortfolioChatbotConfig) => void;

export { App as PortfolioChatbot, type PortfolioChatbotConfig, type ResolvedTheme, type ThemeConfig, createBrandTheme, createDarkTheme, createLightTheme, createMinimalTheme, initPortfolioChatbot, mergeTheme };
