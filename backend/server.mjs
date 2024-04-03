import http from "http";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { logger } from "./services/logger.service.js";
import { fplRoutes } from "./api/fpl/fpl.routes.js";

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cookieParser());
app.use(express.json());

// CORS Configuration
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://localhost:3030",
      "http://127.0.0.1:3030",
      "http://3.125.183.140",
      "http://3.75.158.163",
      "http://35.157.117.28",
      "http://0.0.0.0",
      "https://dreamteam8-1.onrender.com/",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// Routes
app.use("/api", fplRoutes);

// Catch-all route to serve index.html for client-side routing
app.get("/**", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something broke!");
});

// Server configuration
const port = process.env.PORT || 3030; // Use environment variable if available
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logger.info(`Server is running on port ${port}`);
});
