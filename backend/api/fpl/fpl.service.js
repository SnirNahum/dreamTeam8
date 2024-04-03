import axios from "axios";
import { logger } from "../../services/logger.service.js";

async function GeneralInfo() {
  try {
    console.log("work");
    const BASE_URL = "https://fantasy.premierleague.com/api/";
    const response = await axios.get(`${BASE_URL}bootstrap-static`);
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
    const response = await axios.get(`${BASE_URL}element-summary/${playerId}`);
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
