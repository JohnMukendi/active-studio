import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Basic from "./Basic";
import { useState } from "react";


const input = {
  background: "#333",
  color: "white",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#111",
  border: "2px solid #fff",
  height: "auto",
  padding:"20px 0",
  width: "600px",
  boxShadow: 24,
  color: "white",
  p: 2,
};

export default function TransitionsModal() {




  const [files, setFiles] = useState([]);
  const [bool, setBool] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreate = () => setBool(true);

  // receive input values from show name and show description
  const [name, SetName] = useState("");
  const [description, SetDescription] = useState("");
  const [imagecover, SetImageCover] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault()

// awesome code
  if(name,description){
    const showDetails = { name , description, file:files[0]}
    console.log(showDetails)
    
  }
}

const handleSetFiles = (file)=>{
  setFiles(file)
}

  return (
    <div style={{ height: "auto" }}>
      <Button
        variant="outlined"
        color="success"
        sx={{ margin: "0 40px" }}
        onClick={handleOpen}
      >
        Create shows 
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{margin:"0 10px"}}>

            <Typography id="transition-modal-title" variant="h6" component="h4">
              CREATE SHOWS
            </Typography>
            <hr style={{ width: "100px", margin: "10px 0" }} />
            </Box>
            <Typography variant="p" sx={{ fontSize: "11px",margin:"0 10px" }}>
              <b>NOTE :</b> ONLY SHOWS WITH VIDEOS UNDERNEATH THEM ARE VISIBLE
              TO THE PUBLIC
            </Typography>
            <Box sx={{ height: "250px", display: "flex" }}>
              <Box style={{ height: "100%", width: "50%", padding: "10px" }}>
                <Basic files = {files} handleSetFiles = {handleSetFiles}  img={'logo.svg'}/>
              </Box>
              <Box style={{ height: "100%", width: "50%", padding: "10px" }}>
                <form onSubmit={handleSubmit}>
                <input
                  style={{
                    height: "50px",
                    width: "100%",
                    background: "#222",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px ",
                    color: "white",
                    border: "none",
                  }}
                  placeholder="SHOW NAME"
                  
                  onChange={(e)=>SetName(e.target.value)}
                />
                {/* <p style={{margin:"0px 10px",fontSize:"14px"}}>{'SHOW NAME'}</p>  */}
        
                <textarea
                  placeholder="SHOW DESCRIPTION"
                  onChange={(e)=>SetDescription(e.target.value)}
                  style={{
                    border: "none",
                    width: "100%",
                    height: "100px",
                    padding: "10px 0",
                    background: "#222",
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "10px 0",
                    marginTop: "20px",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  {/* <p style={{margin:"0px 10px",fontSize:"14px"}}>{'SHOW DESCRIPTION'}</p>  */}
                </textarea>
                
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ "&:hover": { background: "red", color: "white" } }}
                    onClick={handleClose}
                  >
                    close
                  </Button>
                  <Button
                    type = "submit"
                    color="success"
                    variant="outlined"
                    sx={{ "&:hover": { backgroundColor: "darkgreen", color: "white" } }}
                    onClick={handleCreate}
                  >
                    create
                  </Button>
                </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
