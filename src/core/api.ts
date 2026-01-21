import axios from "axios";

// Static API endpoint - not configurable by user
const API_BASE_URL = "https://your-api-endpoint.com/chat"; // Replace with your actual API endpoint

export interface ApiResponse {
    answer: string;
    context: string[];
}

export const sendMessage = async (
    chatId: string,
    userMessage: string
): Promise<string> => {
    try {
        // Send simplified payload: {chat_id, query}
        const response = await axios.post(API_BASE_URL, {
            chat_id: chatId,
            query: userMessage,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 30000, // 30 second timeout
        });

        // Expecting response format: {"answer": "...", "context": ["chunk1", "chunk2", ...]}
        // But we only return the answer, ignoring context
        const { answer } = response.data;
        
        return answer || "I'm sorry, I couldn't generate a response.";
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
