import { PlayerProps } from "../../services/Interface";
import { getPosition } from "../../services/utilService";

export default function PlayerStats({ player }: PlayerProps) {
  return (
    <section className="player-stats">
      <div className="stats">
        <ul>
          <li>
            <p>Price</p>
            <h3>{`£${player.now_cost / 10}m`}</h3>
            <p className="player-ranks">{`${player.now_cost_rank_type} of ${player.position_rank}*`}</p>
          </li>
          <li>
            <p title="Form is a player's average score per match, calculated from all matches played by his club in the last 30 days">
              <span>Form</span>
            </p>
            <h3>{player.form}</h3>
          </li>
          <li>
            <p>Pts/Match</p>
            <h3>{player.ep_this}</h3>
            <p className="player-ranks">{`${player.points_per_game_rank_type} of ${player.position_rank}*`}</p>
          </li>
          <li>
            <p>Total Pts</p>
            <h3>{player.total_points}</h3>
          </li>
          <li>
            <p>Goals Scored</p>
            <h3>{player.goals_scored}</h3>
          </li>
          <li>
            <p>Assists</p>
            <h3>{player.assists}</h3>
          </li>
          <li>
            <p>Total Bonus</p>
            <h3>{player.bonus}</h3>
          </li>
          <li>
            <p title="Influene Creativity & Threat">
              <span>ICT Index</span>
            </p>
            <h3>{player.ict_index}</h3>
            <p className="player-ranks">{`${player.ict_index_rank_type} of ${player.position_rank}*`}</p>
          </li>
          <li>
            <p>Selected by</p>
            <h3>{`${player.selected_by_percent}%`}</h3>
            <p className="player-ranks">{`${player.selected_rank_type} of ${player.position_rank}*`}</p>
          </li>
        </ul>
        <p className="position-ranking">{`*Ranking for ${
          getPosition(player.element_type).long_position
        }s`}</p>
      </div>
    </section>
  );
}
