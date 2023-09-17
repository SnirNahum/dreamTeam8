export interface FieldPlayerProps {
  dreamTeamPlayers: { id: number }[];
  playerPosition: string;
}

export interface DreamTeamViewProps {
  dreamTeamPlayers: {}[];
}

export interface PlayerImgProps {
  playerCode: number;
  playerName: string;
}

export interface PlayerProps {
  player: {
    now_cost: number;
    form: number;
    ep_this: string;
    now_cost_rank_type: number;
    points_per_game_rank_type: number;
    total_points: number;
    bonus: number;
    ict_index: string;
    ict_index_rank_type: number;
    selected_by_percent: string;
    selected_rank_type: number;
    element_type: number;
  };
}
