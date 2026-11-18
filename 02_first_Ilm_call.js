import {ai, model} from './01_SDK_Gemini.js';

async function main() {
    try{
        const prompt = "Write a short poem about the beauty of nature.";
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                maxOutputTokens: 100,
            }
        });
        console.log("Generated content:", response);
    }catch(error){
        console.error("Error during content generation:", error);
    }
}


main();
