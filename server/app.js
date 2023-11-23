import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
//needed to read .env file
dotenv.config();

app.use(cors({
    origin: 'http://localhost:4200' //replace with your domain or specific front-end origin
}));

const PORT = process.env.PORT
app.listen((PORT), () => {
    console.log("Server is running on port:", PORT)
})

