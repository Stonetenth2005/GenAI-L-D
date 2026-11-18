import express from "express";
import {ai, model} from './01_SDK_Gemini.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.get("/", (req, res) => {
  res.send("Hello, World!");
})

app.post("/generate", async (req, res) => {
  try {
    const prompt = req.body.prompt
    if (!prompt) return res.status(400).json({ error: "prompt is required" });
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
            maxOutputTokens: 100,
        }
    });

    res.json(response);

  } catch (error) {
    console.error("Error during content generation:", error);
    res.status(500).send("Error during content generation");
  }
})