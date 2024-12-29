import * as ai from "../services/ai.service.js";


export const getResult = async (req, res) => {
    try {
        const prompt = req.query.prompt;
        const result = await ai.generateResult(prompt);
        res.json({ result });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}