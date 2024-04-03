import { fplService } from "./fpl.service.js";
import { logger } from "../../services/logger.service.js";

// export async function getGeneralInfo(req, res) {
//   try {
//     const generalInfo = await fplService.GeneralInfo();
//     logger.info("General Info loaded successfully");
//     res.json(generalInfo);
//   } catch (err) {
//     logger.error("Failed to get general info", err);
//     res.status(400).send({ err: "Failed to get general info" });
//   }

// }
export async function getGeneralInfo(req, res) {
  try {
    const TIMEOUT_DELAY = 15000;
    let timeoutReached = false;

    const timeout = setTimeout(() => {
      timeoutReached = true;
      logger.error("Timeout reached while waiting for general info");
      res
        .status(500)
        .send({ err: "Timeout reached while waiting for general info" });
    }, TIMEOUT_DELAY);

    const generalInfo = await fplService.GeneralInfo();
    clearTimeout(timeout);

    if (!timeoutReached) {
      logger.info("General Info loaded successfully");
      res.json(generalInfo);
    }
  } catch (err) {
    logger.error("Failed to get general info", err);
    res.status(400).send({ err: "Failed to get general info" });
  }
}

export async function getPlayerInfo(req, res) {
  try {
    const playerId = req.query.playerId;
    console.log("req.query: ", req.query);
    console.log("playerId: ", playerId);
    const playerInfo = await fplService.PlayerInfo(playerId);
    logger.info(`Player Info ${req.query.playerId} loaded successfully`);
    res.json(playerInfo);
  } catch (err) {
    logger.error("Failed to get players", err);
    res.status(400).send({ err: `Failed to get player ${req.query.playerId}` });
  }
}
