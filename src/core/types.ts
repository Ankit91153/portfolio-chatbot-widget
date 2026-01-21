export type ThemeConfig = {
    // Core Layout
    borderRadius?: string;

    // Chat Window Container
    windowBackgroundColor?: string;        // Main chat window background
    windowBorderColor?: string;            // Chat window border
    windowShadowColor?: string;            // Chat window shadow

    // Header Section
    headerBackgroundColor?: string;        // Header background
    headerTextColor?: string;              // Header title text
    headerBorderColor?: string;            // Header bottom border
    headerCloseButtonColor?: string;       // Close button (X) color
    headerCloseButtonHoverColor?: string;  // Close button hover color

    // Message Area
    messageAreaBackgroundColor?: string;   // Messages container background
    
    // Bot Messages
    botMessageBackgroundColor?: string;    // Bot message bubble background
    botMessageTextColor?: string;          // Bot message text
    botMessageBorderColor?: string;        // Bot message bubble border (optional)

    // User Messages  
    userMessageBackgroundColor?: string;   // User message bubble background
    userMessageTextColor?: string;         // User message text
    userMessageBorderColor?: string;       // User message bubble border (optional)

    // Input Section
    inputSectionBackgroundColor?: string;  // Input area background
    inputSectionBorderColor?: string;      // Input area top border
    inputBackgroundColor?: string;         // Input field background
    inputTextColor?: string;               // Input field text
    inputPlaceholderColor?: string;        // Input placeholder text
    inputBorderColor?: string;             // Input field border
    inputFocusBorderColor?: string;        // Input field focus border
    inputFocusRingColor?: string;          // Input field focus ring

    // Send Button
    sendButtonColor?: string;              // Send button icon color
    sendButtonHoverColor?: string;         // Send button hover color
    sendButtonDisabledColor?: string;      // Send button disabled color

    // Chat Toggle Button (floating button)
    toggleButtonBackgroundColor?: string;  // Chat toggle button background
    toggleButtonIconColor?: string;        // Chat toggle button icon
    toggleButtonHoverBackgroundColor?: string; // Toggle button hover background
    toggleButtonShadowColor?: string;      // Toggle button shadow

    // Typing Indicator
    typingIndicatorColor?: string;         // Typing dots color
    typingIndicatorBackgroundColor?: string; // Typing indicator background

    // Scrollbar (optional)
    scrollbarTrackColor?: string;          // Scrollbar track
    scrollbarThumbColor?: string;          // Scrollbar thumb
    scrollbarThumbHoverColor?: string;     // Scrollbar thumb hover
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
