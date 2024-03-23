import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import TeamLeaderboards from "./TeamLeaderboards";
import { useState } from "react";

export default function PointsLeaderBoards({ teamPlayers }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card
        sx={{
          minWidth: 330,
          border: "1px solid rgba(211,211,211,0.6)",
          margin: 2,
        }}
      >
        <CardHeader
          title="Team Leaderboard"
          align="center"
          action={
            <IconButton
              onClick={() => setOpen(!open)}
              aria-label="expand"
              size="medium"
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }
        ></CardHeader>
        <div
          style={{
            backgroundColor: "inherit",
          }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CardContent>
              <TeamLeaderboards teamPlayers={teamPlayers} />
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </div>
  );
}
