import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = createServer(app);

// socket connect
connectToSocket(server);

// PORT
app.set("port", process.env.PORT || 8000);

// ================= CORS FIX =================
app.use(cors({
  origin: "*",   // allow all frontend domains
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));

// handle preflight requests
app.options("*", cors());

// ================= BODY PARSER =================
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// ================= API ROUTES =================
app.use("/api/v1/users", userRoutes);

// ================= START SERVER =================
const start = async () => {
  try {

    const db = await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected:", db.connection.host);

    server.listen(app.get("port"), () => {
      console.log("Server running on port", app.get("port"));
    });

  } catch (err) {

    console.error("DB connection error:", err);
    process.exit(1);

  }
};

start();
