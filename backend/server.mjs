import http from "http";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

// Import fplRoutes before using it in the Express app
import { fplRoutes } from "./api/fpl/fpl.routes.js";

const app = express();
const server = http.createServer(app);

// Express App Config
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("public")));
  app.use(cors({
    origin: "https://dreamteam-1.onrender.com",
    credentials: true,
  }));
}
else {
  const corsOptions = {
    origin: [
      "https://dreamteam-1.onrender.com",

    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// Define routes after importing fplRoutes
app.use("/api", fplRoutes);

app.get("/**", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});