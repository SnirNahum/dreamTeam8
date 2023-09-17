import { useSelector } from "react-redux";
import { getTeamImg } from "../services/utilService";
export default function Teams() {
  const teams = useSelector((state) => state.fplModule.teams);

  if (!teams) return <div>Loading...</div>;
  return (
    <div className="teams">
      <h2>Select a team</h2>
      <section className="card-grid">
        {teams.map((team) => (
          <ul className="team-card clean-list" key={team.id}>
            <img src={`${getTeamImg(team.code)}`} />
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
