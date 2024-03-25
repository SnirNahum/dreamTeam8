// Import the required modules
import http from "http";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

// Import fplRoutes before using it in the Express app
import { fplRoutes } from "./api/fpl/fpl.routes.js";

// Create an Express app
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Express App Configurations
app.use(cookieParser());
app.use(express.json());

// CORS Configuration based on environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("public")));
  ("https://dreamteam-1.onrender.com/");
} else {
  const corsOptions = {
    origin: ["http://localhost:10000", "http://localhost:5173", "https://dreamteam-1.onrender.com/", "https://dreamteam-1.onrender.com"],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// API routes
app.use("/api", fplRoutes);

// Fallback route to serve index.html (for client-side routing)
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

// Define the port to listen on
const PORT = process.env.PORT || 10000;

// Start the server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
