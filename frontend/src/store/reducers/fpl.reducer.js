export const SET_GENERALINFO = "SET_GENERALINFO";
export const SET_PLAYERINFO = "SET_PLAYERINFO";
export const SET_FILTER_BY = "SET_FILTER_BY";
export const SET_Player1_H2H = "SET_Player1_H2H";
export const SET_Player2_H2H = "SET_Player2_H2H";

const initialState = {
  generalInfo: null,
  teams: [],
  players: [],
  dreamTeamPlayers: [],
  playerFixtures: [],
  playerHistory: [],
  playerHistoryPast: [],
  player1: {},
  player2: {},
  filterBy: {
    name: "",
  },
};
export function fplReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GENERALINFO:
      return {
        ...state,
        players: action.players,
        teams: action.teams,
        dreamTeamPlayers: action.dreamTeamPlayers,
      };
    case SET_PLAYERINFO:
      return {
        ...state,
        playerFixtures: action.playerFixtures,
        playerHistory: action.playerHistory,
        playerHistoryPast: action.playerHistoryPast,
      };
    case SET_FILTER_BY:
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };
    case SET_Player1_H2H:
      return {
        ...state,
        player1: action.player,
      };
    case SET_Player2_H2H:
      return {
        ...state,
        player2: action.player,
      };

    default:
      return state;
  }
}
