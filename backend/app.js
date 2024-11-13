import express from "express";
import dotenv from "dotenv"
import cors from "cors"

const app = express();

dotenv.config({path: "./config/config.env"});
console.log(process.env.PORT)
// FOR CONNECTING TO FRONTEND
app.use(cors({
    origin:[process.env.PORTFOLIO_URL,process.env.DASHBOARD__URL],
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))
export default app;