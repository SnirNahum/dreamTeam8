import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PlayersList from "../Players/PlayersList";

export default function TeamsPage() {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.fplModule.teams);
  const players = useSelector((state) => state.fplModule.players);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const parsedId = parseInt(teamId);

    const foundPlayers = players.filter((player) => player.team === parsedId);
    setTeamPlayers(foundPlayers);
  }, [teamId, teams, players]);
  
  return (
    <div className="TeamPage">
      {/* <PointsLeaderBoards teamPlayers={teamPlayers} />
      <TeamTable teamPlayers={teamPlayers} /> */}
      <PlayersList teamPlayers={teamPlayers} />
    </div>
  );
}
