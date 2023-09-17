import { playerStatus } from "../../services/utilService";

export default function PlayerNews({ player }: any) {
  return (
    <div className={`player-news ${playerStatus(player)}`}>{player?.news}</div>
  );
}
