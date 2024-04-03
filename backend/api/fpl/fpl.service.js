import axios from "axios";
import { logger } from "../../services/logger.service.js";

async function GeneralInfo() {
  try {
    console.log("work");
    const BASE_URL = "https://fantasy.premierleague.com/api/";
    const TIMEOUT_MS = 15000;

    const response = await axios.get(`${BASE_URL}bootstrap-static`, {
      timeout: TIMEOUT_MS,
    });
    console.log("response: ", response);
    return response.data;
  } catch (err) {
    logger.error("cannot find generalInfo", err);
    throw err;
  }
}
async function PlayerInfo(playerId) {
  try {
    const BASE_URL = "https://fantasy.premierleague.com/api/";
    const TIMEOUT_MS = 15000;

    const response = await axios.get(`${BASE_URL}element-summary/${playerId}`, {
      timeout: TIMEOUT_MS,
    });
    return response.data;
  } catch (err) {
    logger.error("cannot find PlayerInfo", err);
    throw err;
  }
}

export const fplService = {
  GeneralInfo,
  PlayerInfo,
};
