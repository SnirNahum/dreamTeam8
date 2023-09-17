import PlayerImg from "../PlayerImg";

export default function FieldPlayer({ player }: any) {
  return (
    <div className="dashboard-player" key={player.id}>
      <PlayerImg playerCode={player.code} />
      <p>{player.web_name}</p>
      <p title="Current price">{"£" + player.now_cost / 10}</p>
      <p title="Selected by others">{player.selected_by_percent + "%"}</p>
    </div>
  );
}
