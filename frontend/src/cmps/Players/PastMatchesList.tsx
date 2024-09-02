import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import PastMatchesPreview from "./PastMatchesPreview";

export default function PastMatchesList() {
  const playerHistory = useSelector((state) => state.fplModule.playerHistory);
  const teams = useSelector((state) => state.fplModule.teams);
  const [pastTeams, setPastTeams] = useState([]);
  const [pastMatches, setPastMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (playerHistory.length > 0 && teams.length > 0) {
      setPastMatches(playerHistory.slice(playerHistory.length - 3));
      const playerTeamIds = playerHistory.map(
        (fixture: any) => fixture.opponent_team
      );

      const updatedPlayerTeams = playerTeamIds.map((teamId: number) =>
        teams.find((team: any) => team.id === teamId)
      );
      setPastTeams(updatedPlayerTeams.slice(updatedPlayerTeams.length - 3));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [playerHistory]);

  return (
    <section>
      <h1>Previous Form</h1>
      <div className="future-match-card-container">
        {isLoading ? (
          <div className="skeleton-players-page">
            <Skeleton count={3} />
          </div>
        ) : (
          pastTeams.map((team: any, index) => (
            <PastMatchesPreview
              key={team.id}
              team={team}
              pastMatches={pastMatches[index]}
            />
          ))
        )}
      </div>
    </section>
  );
}
