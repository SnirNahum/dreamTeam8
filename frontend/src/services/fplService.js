import { httpService } from "./http.service";

export const fplService = {
  loadGeneralInfo,
  loadPlayerInfo,
};

async function loadGeneralInfo() {
  const generaInfo = await httpService.get("generalInfo");
  generaInfo.elements.sort((a, b) => b.total_points - a.total_points);
  return generaInfo;
}
async function loadPlayerInfo(playerId) {
  const playerInfo = await httpService.get("playerInfo", { playerId });
  return playerInfo;
}
