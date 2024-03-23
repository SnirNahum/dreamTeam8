import { getPosition } from "../../services/utilService";
import { Typography } from "@mui/material";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function PlayerBio({ player }: any) {
  const tooltipId = "my-tooltip-1"; // Define a unique tooltip ID

  return (
    <section className="player-bio">
      <Typography className="player-position">
        {getPosition(player.element_type).long_position}
      </Typography>
      <Typography variant="h5">
        {/* Assign the tooltipId to the data-for attribute */}
        <span data-for={tooltipId} data-tip="Hello world! I'm a Tooltip">
          {player.first_name} {player.second_name}
        </span>
      </Typography>
      <Typography>{player.team_name}</Typography>

      {/* Initialize ReactTooltip with the correct id */}
      <ReactTooltip id={tooltipId} place="bottom" effect="solid">
        {/* Tooltip content */}
        Hello world! I'm a Tooltip
      </ReactTooltip>
    </section>
  );
}
