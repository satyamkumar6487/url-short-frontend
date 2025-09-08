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
      

  


      {/* <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create a new Short URL
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          This is your popup content.
        </Typography>
      </Box>
*/}
   // </Modal>
    
//   );
// };

// export default ShortenPopUp;

































// import React from 'react'
// import { Modal, Box, Typography } from '@mui/material';
// const ShortenPopUp = ({open, setOpen, refetch}) => {


//   const handleClose = () => setOpen(false);
//   return (
//     <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >


// <Box sx={style}>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Text in a modal
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//     </Typography>
//   </Box>
// </Modal>
//   )
// }

// export default ShortenPopUp
