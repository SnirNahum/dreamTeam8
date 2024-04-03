import http from "http";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { logger } from "./services/logger.service.js";
const app = express();
const server = http.createServer(app);

// Express App Config
app.use(cookieParser());
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  logger.error(`process.env.NODE_ENV --- ${process.env.NODE_ENV}`);
  app.use(express.static(("public")));
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
      "https://dreamteam8.onrender.com/",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}
logger.error(`process.env.NODE_ENV --- ${process.env.NODE_ENV}`);
import { fplRoutes } from "./api/fpl/fpl.routes.js";

app.use("/api", fplRoutes);

app.get("/**", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

const port = 10000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logger.info(`Server is running on port ${port}`);

});
