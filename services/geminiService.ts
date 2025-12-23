import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
      console.error("API_KEY is missing in environment variables.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateChefAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const ai = getClient();
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8, // Creative and varied
      },
    });

    return response.text || "¡Ups! Mi creatividad culinaria está tomando un descanso. Intenta de nuevo.";
  } catch (error) {
    console.error("Error generating chef advice:", error);
    return "Lo siento, tuve un problema conectando con la cocina virtual. Por favor verifica tu conexión o intenta más tarde.";
  }
};