import express, { Request, Response } from 'express';
import dotenv from "dotenv";

// Allow the use of `.env` variables
dotenv.config();

// our express instance
const app = express();
const PORT = process.env.PORT;

// For formatting in JSON all the incoming requests.
app.use(express.json());

app.listen(PORT, () =>
    console.log(`[EXPRESS] Running on port ${PORT}`)
);