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
const MAX_RETRIES = 3; // Maximum number of retries
const INITIAL_DELAY = 1000; // Initial delay before the first retry in milliseconds

export async function getGeneralInfo(req, res) {
  let retryCount = 0;

  const retry = async () => {
    try {
      const generalInfo = await fplService.GeneralInfo();
      logger.info("General Info loaded successfully");
      res.json(generalInfo);
    } catch (err) {
      if (retryCount < MAX_RETRIES) {
        // Increment the retry count
        retryCount++;

        // Calculate the delay for the next retry using exponential backoff
        const delay = INITIAL_DELAY * Math.pow(2, retryCount);

        // Log the retry attempt
        logger.warn(`Retry attempt ${retryCount}. Retrying in ${delay} ms`);

        // Wait for the delay before retrying
        setTimeout(retry, delay);
      } else {
        // Maximum retries reached, log error and send response
        logger.error("Failed to get general info after maximum retries", err);
        res
          .status(500)
          .send({ err: "Failed to get general info after maximum retries" });
      }
    }
  };

  // Start the first attempt
  retry();
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
export async function gettesting(req, res) {
  try {
    res.send("working");
  } catch (err) {
    logger.error("Failed to get players", err);
    res.status(400).send({ err: `Failed to get player ${req.query.playerId}` });
  }
}
