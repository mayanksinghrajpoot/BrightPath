import dotenv from 'dotenv';
dotenv.config();
console.log('Path to credentials:', process.env.GOOGLE_APPLICATION_CREDENTIALS);
import { GoogleGenAI, Type } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function getCareerSuggestions(questions, answers) {
  const userResponses = questions.map((q, i) => `Question: "${q.question}" - Answer: "${q.options[answers[i]]}"`).join('\n');

  const prompt = `Based on the following quiz responses, analyze the user's personality, interests, and skills. Suggest 2-3 suitable career paths.

User Responses:
${userResponses}

Provide a description, key roles, and required skills for each suggested career.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            careers: {
              type: Type.ARRAY,
              description: "A list of suggested careers.",
              items: {
                type: Type.OBJECT,
                properties: {
                  career: { type: Type.STRING, description: "The name of the career." },
                  description: { type: Type.STRING, description: "A brief description of the career field." },
                  roles: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Top roles within the field." },
                  skills: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Required skillsets and traits." }
                },
                required: ["career", "description", "roles", "skills"]
              }
            }
          },
          required: ["careers"]
        }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API for career suggestions:", error);
    throw new Error("Failed to get career suggestions from AI model.");
  }
}

async function generateCareerRoadmap(careerName) {
  const prompt = `Create a detailed, structured learning roadmap for a beginner aspiring to become a "${careerName}".
The roadmap should be divided into three levels: Beginner, Intermediate, and Advanced.
For each level, provide a clear title, a list of key topics to master, topics outcome and a few suggested resources (like platforms, specific courses, or tools) with example names and URLs.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            levels: {
              type: Type.ARRAY,
              description: "The different learning levels of the roadmap.",
              items: {
                type: Type.OBJECT,
                properties: {
                  level: { type: Type.STRING, description: "The name of the level (e.g., Beginner)." },
                  title: { type: Type.STRING, description: "A summary title for the level's focus." },
                  topics: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of topics to learn." },
                  resources: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        name: { type: Type.STRING, description: "Name of the resource (e.g., a course or website)." },
                        url: { type: Type.STRING, description: "A URL for the resource." }
                      },
                       required: ["name", "url"]
                    }
                  }
                },
                required: ["level", "title", "topics", "resources"]
              }
            }
          },
          required: ["levels"]
        },
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API for career roadmap:", error);
    throw new Error("Failed to generate career roadmap from AI model.");
  }
}

export { getCareerSuggestions, generateCareerRoadmap };
