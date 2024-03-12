import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import OpenAI, { Configuration , OpenAIApi} from 'openai-node';
import * as dotenv from "dotenv";
dotenv .config();

const PORT: number = 8000;

const app: Application = express();
app.use(cors());
app.use(express.json());

const API_KEY: string = process.env.API_KEY || ""; // Providing a default value if API_KEY is undefined

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAI(configuration); 

app.post("/completions", async (req: Request, res: Response)=>{
    try{
        const completions = await openai.createChatCompletion({
            module: "gpt-3.5",
            messages:[{role:"user",content: "Create a SQL request to" + req.body.message}]
        })
        res.send(completions.data.choices[0].message);
    }catch(error){
        console.error(error);
    }
} )

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
