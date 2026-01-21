import axios from "axios";
import { Message } from "./types";

const API_BASE_URL = "https://api.example.com"; // Replace with actual backend URL

export const sendMessage = async (
    chatId: string,
    messages: Message[],
    userMessage: string
): Promise<string> => {
    try {
        // In a real scenario, you'd send the history or just the last message
        // depending on your backend logic.
        const response = await axios.post(`${API_BASE_URL}/chat`, {
            chatId,
            message: userMessage,
            history: messages,
        });
        return response.data.reply;
    } catch (error) {
        console.error("Failed to send message:", error);
        // Fallback mock response for demo purposes
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`This is a mock response to: "${userMessage}". (Backend not connected)`);
            }, 1500);
        });
    }
};
