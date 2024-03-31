import { useState } from "react";
import PlayerPreviewModal from "./PlayerPreviewModal";

export default function TableRow({ row, getPlayer, currPlayer }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <tr className="table-row" {...row.getRowProps()}>
      {row.cells.map((cell: any) => (
        <td
          key={cell.id}
          className="table-cell"
          {...cell.getCellProps()}
          onClick={handleOpen}
        >
          {cell.column.id === "selected_by_percent"
            ? `${cell.value}%`
            : cell.column.id === "now_cost" && cell.value !== 0
              ? `${cell.value / 10}`
              : cell.render("Cell")}
        </td>
      ))}
      <PlayerPreviewModal
        player={row.original}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        getPlayer={getPlayer}
        currPlayer={currPlayer}
      />
    </tr>
  );
}
