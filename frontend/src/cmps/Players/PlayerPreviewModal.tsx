import { Modal, Box } from "@mui/material";
import PlayerPreview from "./PlayerPreview";

export default function PlayerPreviewModal({ player, open, handleClose }: any) {
  return (
    <Modal
      className="modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-content">
        <PlayerPreview player={player} />
      </Box>
    </Modal>
  );
}
