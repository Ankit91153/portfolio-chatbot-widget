# Portfolio Chatbot Widget

A modern, embeddable, and animated portfolio chatbot widget for your website.

## Installation

```bash
npm install portfolio-chatbot-widget
```

## Usage

```javascript
import { initPortfolioChatbot } from "portfolio-chatbot-widget";

initPortfolioChatbot({
  chatId: "YOUR_CHATBOT_ID",
  theme: {
    mode: "dark", // 'light' | 'dark' | 'system'
    primary: "#6366f1",
  },
  position: "bottom-right",
  welcomeMessage: "Hi! Ask me anything about my portfolio.",
});
```

## Configuration

| Option | Type | Default | Description |
|Data | | | |
| `chatId` | `string` | **Required** | The unique ID of your chatbot. |
| `theme.mode` | `'light' \| 'dark' \| 'system'` | `'system'` | Color theme. |
| `theme.primary` | `string` | `#6366f1` | Primary color for buttons and user bubbles. |
| `position` | `'bottom-right' \| 'bottom-left'` | `'bottom-right'` | Widget position. |
| `welcomeMessage` | `string` | - | Initial message from the bot. |

## Development

```bash
npm run build
```
