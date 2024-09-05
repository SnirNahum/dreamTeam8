import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PlayersList from "../Players/PlayersList";

export default function TeamsPage() {
  
  const { teamId } = useParams();
  const players = useSelector((state) => state.fplModule.players);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const foundPlayers = players.filter((player) => player.team === parseInt(teamId));
    setTeamPlayers(foundPlayers);
  }, [teamId, players]);
  
  return (
    <div className="player-list">
           <PlayersList teamPlayers={teamPlayers} />
    </div>
  );
}
