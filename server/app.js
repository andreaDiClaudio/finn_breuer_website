import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());

app.use(cors({
    origin: 'http://localhost:4200' //replace with your domain or specific front-end origin
}));

//needed to read .env file
dotenv.config();

const PORT = process.env.PORT
app.listen((PORT), () => {
    console.log("Server is running on port:", PORT)
})