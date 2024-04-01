import { useSelector } from "react-redux";
import { getTeamImg } from "../services/utilService";
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Teams() {
  const teams = useSelector((state) => state.fplModule.teams);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
  }, [teams]);
  function handleClick(team) {
    navigate(`./${team.id}`);
  }
  if (!teams) return <div></div>;
  return (
    <div className="teams">
      <h2>Select a team</h2>
      <section className="card-grid">
        {teams.map((team: any) => (
          <ul
            className="team-card clean-list"
            key={team.id}
            onClick={() => handleClick(team)}
          >
            {isLoading ? (
              <div>
                <Skeleton count={1} width={40} height={40} />
              </div>
            ) : (
              <>
                <img src={`${getTeamImg(team.code)}`} />
              </>
            )}
            <li>
              <h3>{team.name}</h3>
              <p>{team.short_name}</p>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
}
