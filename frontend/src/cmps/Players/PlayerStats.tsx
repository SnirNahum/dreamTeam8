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
            <p>Total Pts</p>
            <h3>{player.total_points}</h3>
          </li>
          <li>
            <p>Pts/Match</p>
            <h3>{player.ep_this}</h3>
            <p className="player-ranks">{`${player.points_per_game_rank_type} of ${player.position_rank}*`}</p>
          </li>
          <li>
            <p>Last Match Points</p>
            <h3>{player.event_points}</h3>
          </li>

          {/* GK */}
          {player.element_type === 1 ||
          player.element_type === 2 ||
          player.element_type === 3 ? (
            <>
              <li>
                <p>Clean sheet</p>
                <h3>{player.clean_sheets}</h3>
              </li>
              <li>
                <p>Total Goals Conceded</p>
                <h3>{player.goals_conceded}</h3>
              </li>
              <li>
                <p>Goals Conceded per 90'</p>
                <h3>{player.goals_conceded_per_90}</h3>
              </li>
              {player.element_type === 1 ? (
                <>
                  <li>
                    <p>Saves</p>
                    <h3>{player.saves}</h3>
                  </li>
                  <li>
                    <p>Saves per 90'</p>
                    <h3>{player.saves_per_90}</h3>
                  </li>
                  <li>
                    <p>Penalties Saved</p>
                    <h3>{player.penalties_saved}</h3>
                  </li>
                </>
              ) : (
                <div></div>
              )}
            </>
          ) : (
            <div></div>
          )}

          {/*  */}
          <li>
            <p>Total Bonus</p>
            <h3>{player.bonus}</h3>
          </li>
          <li>
            <p title="Form is a player's average score per match, calculated from all matches played by his club in the last 30 days">
              <span>Form</span>
            </p>
            <h3>{player.form}</h3>
          </li>
          {player.element_type !== 1 ? (
            <>
              <li>
                <p>Goals Scored</p>
                <h3>{player.goals_scored}</h3>
              </li>
              <li>
                <p>Assists</p>
                <h3>{player.assists}</h3>
              </li>
            </>
          ) : (
            <div></div>
          )}

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
          <li>
            <p>Started in line-ups</p>
            <h3>{player.starts}</h3>
          </li>
          <li>
            <p>Yellow Cards</p>
            <h3>{player.yellow_cards}</h3>
          </li>
          <li>
            <p>Red Cards</p>
            <h3>{player.red_cards}</h3>
          </li>
        </ul>
        <p className="position-ranking">{`*Ranking for ${
          getPosition(player.element_type).long_position
        }s`}</p>
      </div>
    </section>
  );
}
