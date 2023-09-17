import { getTeamImg } from "../../services/utilService";

export default function FutureMatchesPreview({ team, fixtureInfo }: any) {
  return (
    <div className="future-match-card">
      <p>{`GW${fixtureInfo.event}`}</p>
      <img src={`${getTeamImg(team.code)}`} alt={`Team ${team.code}`} />
      <p
        className={`match-difficulty match-difficulty-${fixtureInfo.difficulty}`}
      >
        {fixtureInfo.difficulty}
      </p>
    </div>
  );
}
