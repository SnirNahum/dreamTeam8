import axios from "axios";
import { logger } from "../../services/logger.service.js";
import { HttpsProxyAgent } from "https-proxy-agent";
import { utilService } from "../../services/util.service.js";

async function GeneralInfo() {
  try {
    const BASE_URL = "https://fantasy.premierleague.com/api/";
    const agent = new HttpsProxyAgent(`http://sgvygpyc-rotate:bnq2scmvmpmv@p.webshare.io:80/`);
    const response = await axios.get(`${BASE_URL}bootstrap-static/`, {
      httpsAgent: agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
      },

    });
    return response.data;
  } catch (err) {
    logger.error("cannot find generalInfo", err);
    throw err;
  }
}
async function PlayerInfo(playerId) {
  try {
    const BASE_URL = "https://fantasy.premierleague.com/api/";
    const agent = new HttpsProxyAgent(`http://sgvygpyc-rotate:bnq2scmvmpmv@p.webshare.io:80/`);
    const response = await axios.get(`${BASE_URL}element-summary/${playerId}`, {
      httpsAgent: agent,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
      },
    });
    getRivalTeam(response.data.fixtures)
    getPrediction1(response.data)
    return response.data
  } catch (err) {
    logger.error("cannot find PlayerInfo", err);
    throw err;
  }
}
async function getRivalTeam(playerData) {
  try {
    return utilService.getPlayerFixtures(playerData)
  } catch (err) {
    logger.error("cannot find PlayerInfo", err);
    throw err;
  }

}

export const fplService = {
  GeneralInfo,
  PlayerInfo,
};


