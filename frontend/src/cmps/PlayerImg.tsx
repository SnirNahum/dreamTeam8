import { PlayerImgProps } from "../services/Interface";

export default function PlayerImg({ playerCode, playerName }: PlayerImgProps) {
  if (!playerCode) return <div>loading...</div>;
  return (
    <img
      src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${playerCode}.png`}
      alt={playerName}
    />
  );
}
