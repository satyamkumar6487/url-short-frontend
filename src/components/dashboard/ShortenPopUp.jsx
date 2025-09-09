import React from 'react'
import { Modal, Box, Typography } from '@mui/material';
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

     <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-1 sm:w-[400px] w-[50%]">
          <CreateNewShorten setOpen={setOpen} refetch={refetch} />
        </div>
      </div>
    </Modal>
  );
};

export default ShortenPopUp;
      

  
