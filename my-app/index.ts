
import express, {Application, Request, Response} from 'express';
import cors from "cors";
import {Configuration, OpenAIApi} from "openai";

const app : Application = express()
app.use(cors());
app.use(express.json())
const PORT: number = 8000;
const API_KEY:string "ENTER API STRING";