import express from "express";
import { getGeneralInfo, getPlayerInfo, gettesting } from "./fpl.controller.js";

const router = express.Router();

router.get("/generalInfo", getGeneralInfo);
router.get("/playerInfo", getPlayerInfo);
router.get("/test", gettesting);

export const fplRoutes = router;
