import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables
console.log(process.env.MONGO_URL); // should print your MongoDB URI

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// PORT
app.set("port", process.env.PORT || 8000);

// Middlewares
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Server is running....");
});

// API ROUTES
app.use("/api/v1/users", userRoutes);

// START SERVER FUNCTION
const start = async () => {
  try {
    // Connect to MongoDB
    const connectionDb = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

    // Start server
    server.listen(app.get("port"), () => {
      console.log(`LISTENING ON PORT ${app.get("port")}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

start();
