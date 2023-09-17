export const SET_GENERALINFO = "SET_GENERALINFO";
export const SET_PLAYERINFO = "SET_PLAYERINFO";
export const SET_FILTER_BY = "SET_FILTER_BY";

const initialState = {
  generalInfo: null,
  teams: [],
  players: [],
  dreamTeamPlayers: [],
  playerFixtures: [],
  playerHistory: [],
  playerHistoryPast: [],
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

    default:
      return state;
  }
}
