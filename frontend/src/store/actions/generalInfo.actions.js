import {
  SET_FILTER_BY,
  SET_GENERALINFO,
  SET_PLAYERINFO,
  SET_Player1_H2H,
  SET_Player2_H2H,
} from "../reducers/fpl.reducer";
import { fplService } from "../../services/fplService";
import { getRank, getTeamInfo } from "../../services/utilService";
import { store } from "../store";

export async function setPlayer1(player) {
  const action = {
    type: SET_Player1_H2H,
    player,
  };
  store.dispatch(action);
}
export async function setPlayer2(player) {
  const action = {
    type: SET_Player2_H2H,
    player,
  };
  store.dispatch(action);
}
export async function loadPlayerInfo(playerId) {
  try {
    const playerInfo = await fplService.loadPlayerInfo(playerId);
    const playerFixtures = playerInfo.fixtures;
    const playerHistory = playerInfo.history;
    const playerHistoryPast = playerInfo.history_past;

    const action = {
      type: SET_PLAYERINFO,
      playerInfo,
      playerFixtures,
      playerHistory,
      playerHistoryPast,
    };

    store.dispatch(action);
  } catch (error) {
    console.log("error:", error);
  }
}

export async function loadGeneralInfo(playerId) {
  try {
    const generalInfo = await fplService.loadGeneralInfo(playerId);
    let players = generalInfo.elements;
    const teams = generalInfo.teams;
    const dreamTeamPlayers = players.filter(
      (player) => player.in_dreamteam === true
    );
    players.forEach((player, index) => {
      const teamInfo = getTeamInfo(player.team_code, teams);
      const positionRank = getRank(
        player.element_type,
        generalInfo.element_types
      );
      players[index]["team_short_name"] = teamInfo.short_name;
      players[index]["team_name"] = teamInfo.name;
      players[index]["position_rank"] = positionRank;
    });
    players = players.filter((player) => player.status !== "u");

    const categorizedPlayers = {
      1: [],
      2: [],
      3: [],
      4: [],
    };

    dreamTeamPlayers.forEach((player) => {
      categorizedPlayers[player.element_type].push(player);
    });
    const action = {
      type: SET_GENERALINFO,
      players,
      teams,
      dreamTeamPlayers: categorizedPlayers,
    };
    store.dispatch(action);
  } catch (error) {
    console.log("error:", error);
  }
}

export async function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy });
}
