import { getPosition } from "../../services/utilService";
import { Typography } from "@mui/material";

export default function PlayerBio({ player }: any) {
  return (
    <section className="player-bio">
      <Typography className="player-position">
        {getPosition(player.element_type).long_position}
      </Typography>
      <Typography variant="h5">
        {player.first_name} {player.second_name}
      </Typography>
      <Typography>{player.team_name}</Typography>
    </section>
  );
}
