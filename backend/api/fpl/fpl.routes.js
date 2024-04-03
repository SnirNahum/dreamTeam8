import express from "express";
import { getGeneralInfo, getPlayerInfo } from "./fpl.controller.js";

const router = express.Router();

router.get("/generalInfo", getGeneralInfo);
router.get("/playerInfo", getPlayerInfo);

export const fplRoutes = router;
