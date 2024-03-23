import http from "http";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

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
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://localhost:3030",
      "http://127.0.0.1:3030",
      "http://10.100.102.7:5173",
      "http://localhost:3030",
      "http://localhost:4173",
      "http://10.100.102.7:4173",
      "https://dreamteam-1.onrender.com"
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

import { fplRoutes } from "./api/fpl/fpl.routes.js";

// routes
app.use("/api", fplRoutes);

app.get("/**", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

const port = process.env.PORT || 3030;
server.listen(port, () => {
});
