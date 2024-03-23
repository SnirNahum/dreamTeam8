import Container from "@mui/material/Container";
import PlayerImg from "../PlayerImg";

export default function SetPieceLeaderBoards({ teamPlayers }) {
  function getPlayerData(key: any) {
    if (teamPlayers.length === 0) return null;

    // let filteredPlayers = teamPlayers.filter(
    //   (player) => player.penalties_order !== null
    // );
    // if (filteredPlayers.length === 0) return null;

    const topPlayer = teamPlayers.reduce((prev, current) =>
      current[key] > prev[key] ? current : prev
    );

    return {
      value: topPlayer[key],

      img: topPlayer.code,
      name: topPlayer.web_name,
    };
  }

  return (
    <Container
      sx={{
        lineHeight: 1.2,
      }}
    >
      {teamPlayers.length > 0 ? (
        <div className="team-leaderboard-card-container">
          {[
            { key: "goals_scored", label: "Top Scorer" },
            { key: "assists", label: "El Maestro" },
            { key: "total_points", label: "Most Points" },
            { key: "points_per_game", label: "Points Per Game" },
            { key: "form", label: "Form" },
            // { key: "selected_by_percent", label: "Most Attractive" },
            // { key: "penalties_order", label: "Penalties Order" },
            // {
            //   key: "corners_and_indirect_freekicks_order",
            //   label: "Corners and Indirect Free Kicks Order",
            // },
            // {
            //   key: "direct_freekicks_order",
            //   label: "Direct Free Kicks Order",
            // },
          ].map((item) => (
            <div className="team-leaderboard-card" key={item.key}>
              <p>{getPlayerData(item.key)?.name}</p>
              <PlayerImg playerCode={getPlayerData(item.key)?.img} />
              <h5>{item.label}</h5>
              <h4>{`${getPlayerData(item.key)?.value} ${
                item.key === "assists"
                  ? "Assists"
                  : item.key === "total_points"
                  ? ""
                  : ""
              }`}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  );
}
