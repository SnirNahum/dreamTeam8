import { Modal, Box } from "@mui/material";
import PlayerPreview from "./PlayerPreview";
import { CheckIcon } from "../../services/svg.service";

export default function PlayerPreviewModal({
  player,
  open,
  handleClose,
  getPlayer,
  currPlayer
}: any) {
  return (
    <Modal
      className="modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      
      <Box className="modal-content">
        <div className="modal-close-btn" onClick={handleClose}>
          <CheckIcon />
        </div>
        <PlayerPreview
          player={player}
          getPlayer={getPlayer}
          currPlayer={currPlayer}
        />
      </Box>
    </Modal>
  );
}
