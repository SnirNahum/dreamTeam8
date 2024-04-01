import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import CardStats from "./CardStats";

export default function CardStatsContainer({ h2hPlayer1, h2hPlayer2, title }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card
        sx={{
          border: "0.5px solid rgba(255,255,255.2)",
          margin: 0,
        }}
      >
        <CardHeader
          onClick={() => setOpen(!open)}
          title={title}
          align="center"
          action={
            <IconButton
              aria-label="expand"
              size="large"
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
              <CardStats h2hPlayer1={h2hPlayer1} h2hPlayer2={h2hPlayer2} title={title} />
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </div>
  );
}
