import React, { useState } from 'react';
import { Box, Paper, Modal } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  maxWidth: '90%',
  maxHeight: '90%',
  overflow: 'auto',
};

const GalleryItem = ({ src, alt }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper elevation={4} onClick={handleOpen}>
        <img src={src} alt={alt} style={{ width: '100%', display: 'block', cursor: 'pointer' }} />
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal-title"
        aria-describedby="image-modal-description"
      >
        <Box sx={modalStyle}>
          <img src={src} alt={alt} style={{ width: '100%', maxHeight: '100%' }} />
        </Box>
      </Modal>
    </>
  );
};

export default GalleryItem;