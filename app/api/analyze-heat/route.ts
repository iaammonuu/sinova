import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { location, activity } = await req.json();
    
    // Check if API key is provided
    if (!process.env.GEMINI_API_KEY) {
       return NextResponse.json({ 
         error: "GEMINI_API_KEY environment variable is not configured." 
       }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // For demo purposes, we will mock the current temperature based on the location.
    // In a real application, you would call the FortyGuard API here.
    const temp = Math.floor(Math.random() * 15) + 30; // Random temp between 30-45°C
    
    const prompt = `You are an expert climate intelligence AI. The current temperature in ${location} is ${temp}°C. 
    A user is planning the following operational activity: "${activity}". 
    
    Provide a highly technical heat risk assessment. Format the output exactly as follows (no markdown bolding, just plain text):
    
    RISK LEVEL: [Low/Moderate/High/Critical]
    ANALYSIS: [2 concise sentences explaining the physiological or operational impact of ${temp}°C on this specific activity]
    RECOMMENDED ACTIONS: 
    - [Action 1]
    - [Action 2]`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return NextResponse.json({ 
      result: response.text, 
      temperature: temp 
    });
  } catch (error: any) {
    console.error("AI Analysis Error:", error);
    return NextResponse.json({ error: error.message || "Failed to analyze risk" }, { status: 500 });
  }
}
