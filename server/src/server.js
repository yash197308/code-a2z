import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import router from "./routes/index.js";
import { PORT } from "./constants/env.js";
import errorHandler from "./middlewares/error.handler.js";

dotenv.config();

const server = express();

// Middleware
server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(errorHandler);

// Connect to Database
connectDB();

// Routes
server.get("/", (req, res) => res.send("Backend is running..."));
server.get("/health", (req, res) => res.status(200).json({ status: "OK", timestamp: new Date().toISOString() }));
server.use("/api", router);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
