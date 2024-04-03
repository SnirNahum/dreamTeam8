import axios from "axios";
import { logger } from "../../services/logger.service.js";
import {HttpsProxyAgent} from "https-proxy-agent";

async function GeneralInfo() {
  try {
    console.log("work");
    const BASE_URL = "https://fantasy.premierleague.com/api/";
    const TIMEOUT_MS = 15000;
    const agent = new HttpsProxyAgent(`http://sgvygpyc-rotate:bnq2scmvmpmv@p.webshare.io:80/`);
    const response = await axios.get(`${BASE_URL}bootstrap-static/`, {
      httpsAgent: agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
      },

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
