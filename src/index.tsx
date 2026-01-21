import { createRoot } from "react-dom/client";
import { App } from "./App";
import { PortfolioChatbotConfig } from "./core/types";
import "./index.css"; // We will handle how this gets applied

const CONTAINER_ID = "portfolio-chatbot-root";

export const initPortfolioChatbot = (config: PortfolioChatbotConfig) => {
    // Check if already initialized
    if (document.getElementById(CONTAINER_ID)) {
        console.warn("Portfolio Chatbot already initialized");
        return;
    }

    // Create host element
    const host = document.createElement("div");
    host.id = CONTAINER_ID;
    document.body.appendChild(host);

    // Attach Shadow DOM
    const shadow = host.attachShadow({ mode: "open" });

    // Create mount point inside shadow DOM
    const mountPoint = document.createElement("div");
    shadow.appendChild(mountPoint);

    // Inject Styles
    // Placeholder for post-build script to inject CSS content
    const cssContent = `__CSS_CONTENT_PLACEHOLDER__`;

    const styleSlot = document.createElement('style');
    styleSlot.textContent = cssContent;
    shadow.appendChild(styleSlot);

    const root = createRoot(mountPoint);
    root.render(<App config={config} />);
};

// Auto-init if window global is present (optional)
if (typeof window !== "undefined") {
    (window as any).initPortfolioChatbot = initPortfolioChatbot;
}
