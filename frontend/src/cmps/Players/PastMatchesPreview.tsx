import { getTeamImg } from "../../services/utilService";

export default function PastMatchesPreview({ pastMatches, team }: any) {
  return (
    <div className="future-match-card">
      <p>{`GW${pastMatches.round}`}</p>
      <img src={`${getTeamImg(team.code)}`} />
      <p className="past-match-points">
        {pastMatches.total_points}
        <span>pts</span>
      </p>
    </div>
  );
}
