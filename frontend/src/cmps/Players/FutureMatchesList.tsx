import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import FutureMatchesPreview from "./FutureMatchesPreview";

function FutureMatchesList() {
  const playerFixtures = useSelector((state) => state.fplModule.playerFixtures);
  const teams = useSelector((state) => state.fplModule.teams);

  const [isLoading, setIsLoading] = useState(true);
  const [playerTeams, setPlayerTeams] = useState([]);
  const [fixtureInfo, setfixtureInfo] = useState([]);

  useEffect(() => {
    if (playerFixtures.length > 0 && teams.length > 0) {
      setfixtureInfo(playerFixtures.slice(0, 3));
      const playerTeamIds = playerFixtures
        .slice(0, 3)
        .map((fixture: any) => fixture.rival_team);

      const updatedPlayerTeams = playerTeamIds.map((teamId: number) =>
        teams.find((team: any) => team.id === teamId)
      );
      setPlayerTeams(updatedPlayerTeams);
      setIsLoading(false)
    }
  }, [playerFixtures, teams]);

  return (
    <section>
      <h1>Next Matches</h1>
      <div className="future-match-card-container">
        {isLoading ? (
          <div className="skeleton-players-page">
            <Skeleton count={3} />
          </div>
        ) : (
          playerTeams.map((team, index) => (
            <FutureMatchesPreview
              team={team}
              fixtureInfo={fixtureInfo[index]}
              key={team.id}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default FutureMatchesList;
