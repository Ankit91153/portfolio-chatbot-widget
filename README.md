# Portfolio Chatbot Widget

A modern, embeddable, and fully customizable portfolio chatbot widget for your website. Features complete dynamic color customization with no theme limitations.

## 🚀 Installation

```bash
npm install portfolio-chatbot-widget
```

## 📋 Quick Start

### Step 1: Import the Component

```javascript
import { PortfolioChatbot } from 'portfolio-chatbot-widget';
```

### Step 2: Basic Configuration

```javascript
const App = () => {
  const config = {
    chatId: "YOUR_CHATBOT_ID", // Required
    theme: {
      // Add any colors you want to customize
      userMessageBackgroundColor: "#3b82f6",
      toggleButtonBackgroundColor: "#3b82f6",
    },
    welcomeMessage: "Hi! Ask me anything about my portfolio.",
  };

  return <PortfolioChatbot config={config} />;
};
```

### Step 3: Advanced Configuration (Optional)

```javascript
const config = {
  chatId: "YOUR_CHATBOT_ID",
  theme: {
    // Window
    windowBackgroundColor: "#ffffff",
    windowBorderColor: "#e5e7eb",
    
    // Header
    headerBackgroundColor: "#ffffff",
    headerTextColor: "#111827",
    
    // Messages
    userMessageBackgroundColor: "#3b82f6",
    botMessageBackgroundColor: "#f9fafb",
    
    // Input
    inputBackgroundColor: "#f9fafb",
    inputTextColor: "#111827",
    
    // Button
    toggleButtonBackgroundColor: "#3b82f6",
  },
  position: "bottom-right",
  welcomeMessage: "Hi! How can I help you today?",
  placeholder: "Type your message...",
  animation: "slide"
};
```

## ⚙️ Configuration Options

### Basic Configuration

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `chatId` | `string` | ✅ Yes | - | Unique identifier for your chatbot |
| `theme` | `ThemeConfig` | ❌ No | `{}` | Color customization object |
| `position` | `'bottom-right' \| 'bottom-left'` | ❌ No | `'bottom-right'` | Widget position on screen |
| `welcomeMessage` | `string` | ❌ No | - | Initial message from bot |
| `placeholder` | `string` | ❌ No | `"Ask me anything..."` | Input field placeholder |
| `animation` | `'slide' \| 'fade' \| 'scale'` | ❌ No | `'slide'` | Opening animation style |

### Theme Configuration (All Optional)

#### Layout & Structure

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `borderRadius` | `string` | `"1rem"` | Border radius for all elements |

#### Chat Window Container

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `windowBackgroundColor` | `string` | `"#ffffff"` | Main chat window background |
| `windowBorderColor` | `string` | `"#e5e7eb"` | Chat window border color |
| `windowShadowColor` | `string` | `"rgba(0, 0, 0, 0.1)"` | Chat window shadow color |

#### Header Section

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `headerBackgroundColor` | `string` | `"#ffffff"` | Header background color |
| `headerTextColor` | `string` | `"#111827"` | Header title text color |
| `headerBorderColor` | `string` | `"#e5e7eb"` | Header bottom border color |
| `headerCloseButtonColor` | `string` | `"#6b7280"` | Close button (X) color |
| `headerCloseButtonHoverColor` | `string` | `"#374151"` | Close button hover color |

#### Message Area

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `messageAreaBackgroundColor` | `string` | `"#f9fafb"` | Messages container background |

#### Bot Messages

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `botMessageBackgroundColor` | `string` | `"#ffffff"` | Bot message bubble background |
| `botMessageTextColor` | `string` | `"#111827"` | Bot message text color |
| `botMessageBorderColor` | `string` | `"#e5e7eb"` | Bot message bubble border |

#### User Messages

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `userMessageBackgroundColor` | `string` | `"#3b82f6"` | User message bubble background |
| `userMessageTextColor` | `string` | `"#ffffff"` | User message text color |
| `userMessageBorderColor` | `string` | `"#2563eb"` | User message bubble border |

#### Input Section

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `inputSectionBackgroundColor` | `string` | `"#ffffff"` | Input area background |
| `inputSectionBorderColor` | `string` | `"#e5e7eb"` | Input area top border |
| `inputBackgroundColor` | `string` | `"#f9fafb"` | Input field background |
| `inputTextColor` | `string` | `"#111827"` | Input field text color |
| `inputPlaceholderColor` | `string` | `"#9ca3af"` | Input placeholder text color |
| `inputBorderColor` | `string` | `"#d1d5db"` | Input field border color |
| `inputFocusBorderColor` | `string` | `"#3b82f6"` | Input field focus border color |
| `inputFocusRingColor` | `string` | `"#3b82f6"` | Input field focus ring color |

#### Send Button

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `sendButtonColor` | `string` | `"#6b7280"` | Send button icon color |
| `sendButtonHoverColor` | `string` | `"#3b82f6"` | Send button hover color |
| `sendButtonDisabledColor` | `string` | `"#d1d5db"` | Send button disabled color |

#### Toggle Button (Floating Button)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `toggleButtonBackgroundColor` | `string` | `"#3b82f6"` | Toggle button background |
| `toggleButtonIconColor` | `string` | `"#ffffff"` | Toggle button icon color |
| `toggleButtonHoverBackgroundColor` | `string` | `"#2563eb"` | Toggle button hover background |
| `toggleButtonShadowColor` | `string` | `"rgba(59, 130, 246, 0.3)"` | Toggle button shadow |

#### Typing Indicator

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `typingIndicatorColor` | `string` | `"#9ca3af"` | Typing dots color |
| `typingIndicatorBackgroundColor` | `string` | `"#ffffff"` | Typing indicator background |

#### Scrollbar

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `scrollbarTrackColor` | `string` | `"#f3f4f6"` | Scrollbar track color |
| `scrollbarThumbColor` | `string` | `"#d1d5db"` | Scrollbar thumb color |
| `scrollbarThumbHoverColor` | `string` | `"#9ca3af"` | Scrollbar thumb hover color |

## 🎨 Theme Examples

### Dark Theme

```javascript
import { createDarkTheme } from 'portfolio-chatbot-widget';

const config = {
  chatId: "dark-chat",
  theme: createDarkTheme("#3b82f6") // Custom accent color
};
```

### Light Theme

```javascript
import { createLightTheme } from 'portfolio-chatbot-widget';

const config = {
  chatId: "light-chat",
  theme: createLightTheme("#10b981") // Custom accent color
};
```

### Brand Theme

```javascript
import { createBrandTheme } from 'portfolio-chatbot-widget';

const config = {
  chatId: "brand-chat",
  theme: createBrandTheme("#1e40af", "#1d4ed8", "#ffffff")
  // Primary color, Secondary color, Background color
};
```

### Custom Theme

```javascript
const config = {
  chatId: "custom-chat",
  theme: {
    // Only specify colors you want to change
    windowBackgroundColor: "#1a1a1a",
    headerBackgroundColor: "#2d2d2d",
    headerTextColor: "#ffffff",
    userMessageBackgroundColor: "#0066cc",
    botMessageBackgroundColor: "#333333",
    botMessageTextColor: "#ffffff",
    inputBackgroundColor: "#2d2d2d",
    inputTextColor: "#ffffff",
    toggleButtonBackgroundColor: "#0066cc",
  }
};
```

### Minimal Configuration

```javascript
// Just change the essential colors
const config = {
  chatId: "minimal-chat",
  theme: {
    userMessageBackgroundColor: "#ff6b6b", // User message color
    toggleButtonBackgroundColor: "#ff6b6b", // Button color
  }
  // All other colors use defaults
};
```

## 🛠️ Advanced Usage

### Theme Helpers

```javascript
import { 
  createDarkTheme, 
  createLightTheme, 
  createMinimalTheme, 
  createBrandTheme,
  mergeTheme 
} from 'portfolio-chatbot-widget';

// Combine themes
const customTheme = mergeTheme(
  createDarkTheme("#3b82f6"),
  {
    headerBackgroundColor: "#7c3aed", // Override specific colors
    borderRadius: "2rem"
  }
);
```

### Dynamic Theme Switching

```javascript
import { useState } from 'react';
import { createDarkTheme, createLightTheme } from 'portfolio-chatbot-widget';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  
  const config = {
    chatId: "theme-switcher",
    theme: isDark 
      ? createDarkTheme("#3b82f6")
      : createLightTheme("#3b82f6")
  };

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? 'Light' : 'Dark'} Theme
      </button>
      <PortfolioChatbot config={config} />
    </div>
  );
};
```

## 🎯 Color Format Support

All color properties support:
- **Hex**: `#3b82f6`, `#ffffff`
- **RGB**: `rgb(59, 130, 246)`
- **RGBA**: `rgba(59, 130, 246, 0.5)`
- **HSL**: `hsl(217, 91%, 60%)`
- **CSS Names**: `blue`, `white`, `transparent`

## 📱 Responsive Design

The widget automatically adapts to different screen sizes:
- **Desktop**: Fixed width (380px)
- **Mobile**: Full width with margins
- **Height**: Responsive up to 80% of viewport height

## ♿ Accessibility

- Ensure sufficient color contrast between text and backgrounds
- Test with screen readers
- Consider users with color vision deficiencies
- Use semantic color combinations

## 🔧 TypeScript Support

Full TypeScript support with autocomplete:

```typescript
import { PortfolioChatbotConfig } from 'portfolio-chatbot-widget';

const config: PortfolioChatbotConfig = {
  chatId: "typed-chat",
  theme: {
    // Full autocomplete and type checking
    windowBackgroundColor: "#ffffff",
    // ... other options
  }
};
```

## 📦 Bundle Size

- **Gzipped**: ~15KB
- **Dependencies**: React, Framer Motion, Lucide React
- **CSS**: Included automatically

## 🤝 Support

- Ensure React 18+ is installed
- Compatible with Next.js, Vite, Create React App
- Works in modern browsers (ES2020+)

## 📄 License

MIT
