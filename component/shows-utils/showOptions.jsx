import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal'
import { Backdrop, Box, Typography,Button,Fade } from '@mui/material';


const modalStyle = {
  position: "absolute",
  background : '#111',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#111",
  border: "2px solid #fff",
  height: "auto",
  padding: "20px 0",
  width: "600px",
  boxShadow: 24,
  color: "white",
  p: 2,
};

export default function ShowOptions({title,fetchAgain,setFetchAgain}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openModal,setOpenModal] = React.useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };

  const handleModalOpen = ()=>{
    setAnchorEl(null);
    setOpenModal(true)
  }
  const handleModalClose = ()=>{
    
    setOpenModal(false)
  }
  //DELETE FUNCTION 
  const handleDeleteClick = async ()=>{

    
    const showTitle = title.replace(/ /g,'-')
    //const deleteEndpoint = `http://127.0.0.1:3000/delete-show/${showTitle}`
  
    //const deleteEndpoint = `${API_INSTANCE}/delete-show/${showTitle}`;
    const deleteEndpoint = `https://nahgp463k7.execute-api.us-east-2.amazonaws.com/Prod/delete-show/${showTitle}`
    
    console.log('endpoint :',deleteEndpoint)
  
    try{
      console.log(title)
      
      console.log('deleting...')
      const response = await axios.delete(deleteEndpoint)
      console.log(deleteEndpoint)
        //,{header:{'Content-Type' : 'application/json'}});
      console.log('RESPONSE:',response)
      setAnchorEl(null);
      setFetchAgain(!fetchAgain)
      setOpenModal(false)
    }catch(error){
      
      console.log('endpoint :',deleteEndpoint)
      
      console.log('DELETE ERROR:',error)
      
    }

  };

  return (
    <div>
      <MoreHorizIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        cursor = 'pointer'
      />
      
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}

        <MenuItem onClick={handleModalOpen} sx={{display:"flex",alignItems:'center'}}>
          <DeleteIcon sx={{marginRight:'4px'}}  />
          Delete
        </MenuItem>
      </Menu>

      {/* DELETE CONFIRMATION PROMPT */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        BackdropComponent={Backdrop}
        
        BackdropProps={{
          timeout: 500,
        }}
        open={openModal}
        onClose = {handleModalClose}
        closeAfterTransition
      >
        <Fade in = {openModal}>

        
        <Box style={modalStyle}>
            <Box sx={{ margin: "0 10px" }}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h4"
                sx={{textAlign:'center'}}
              >
                WARNING
              </Typography>
              <hr style={{ width: "100%", margin: "10px 0" }} />
            </Box>
            <Box sx={{margin:'20px 0px'}}>
              <Typography sx={{textAlign:'center'}}>
                Are you sure you want to delete <b>{title}</b> ?
              </Typography>
            </Box>
            <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ "&:hover": { background: "red", color: "white" },width:'20%' }}
                      onClick={handleModalClose}
                    >
                      CANCEL
                    </Button>
                    <Button
                      type="submit"
                      color="success"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          backgroundColor: "darkgreen",
                          color: "white",
                        },
                        width:'20%'
                      }}
                      onClick={handleDeleteClick}
                    >
                      YES
                    </Button>
                  </Box>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}
