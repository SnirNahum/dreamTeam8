import { loadPlayerInfo } from "../../store/actions/generalInfo.actions";
import PlayerImg from "../PlayerImg";
import PlayerStats from "./PlayerStats";
import PlayerBio from "./PlayerBio";
import { useEffect } from "react";
import PlayerNews from "./PlayerNews";
import FutureMatchesList from "./FutureMatchesList";
import PastMatchesList from "./PastMatchesList";

export default function PlayerPreview({ player, getPlayer, currPlayer }: any) {
  useEffect(() => {
    loadPlayer(player.id);
    updateH2HPlayer(player);
  }, [player.id]);

  async function loadPlayer(playerId: number) {
    await loadPlayerInfo(playerId);
  }
  async function updateH2HPlayer(player) {
    if (getPlayer) {
      getPlayer(player, currPlayer);
    }
  }
  return !getPlayer ? (
    <section>
      <section className="player-preview">
        <PlayerNews player={player} />
        <div className="player-preview-name">
          <PlayerImg playerCode={player.code} playerName={player.web_name} />
          <PlayerBio player={player} />
        </div>
      </section>
      <div className="player-preview-header">
        <PlayerStats player={player} />
        <div className="player-preview-matches">
          <PastMatchesList player={player} />
          <FutureMatchesList />
        </div>
      </div>
    </section>
  ) : null;
}
