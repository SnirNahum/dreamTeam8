import { getTeamImg } from "../../services/utilService";

export default function Head2HeaderPlayer1({ player }: any) {
  return (
    <div className="player-card-container">
      {player ? (
        <div
          className="player-card"
          style={{
            color: "black",
            backgroundImage: `url(${"https://res.cloudinary.com/datldedpm/image/upload/v1695144892/player-cards/j1bixcobnhbfwxztk4oi.webp"})`,
          }}
        >
          <div className="image-container">
            <img
              src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
              alt="playerImg"
            />
          </div>
          <div className="player-card-info-container">
            <div className="player-card-info">
              <p>{player.web_name}</p>
            </div>
            <div className="player-card-stats-container">
              <div className="player-card-stats">
                <p>
                  <span>Price: </span>
                  {"£" + player.now_cost / 10}
                </p>
                <p>
                  <span> T.Pts: </span>
                  {player.total_points}
                </p>
                <p>
                  <span> Owned: </span>
                  {player.selected_by_percent + "%"}
                </p>
              </div>
              <img className="ddd" src={`${getTeamImg(player.team_code)}`} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="player-card"
          style={{
            color: "black",
            backgroundImage: `url(${"https://res.cloudinary.com/datldedpm/image/upload/v1695144892/player-cards/j1bixcobnhbfwxztk4oi.webp"})`,
          }}
        ></div>
      )}
    </div>
  );
}
