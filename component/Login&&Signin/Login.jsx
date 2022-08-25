import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const styles = {
  container: {
    background: "url('login-bg.jpg')",
    height: "1300px",
    width: "100%",
    padding:'50px 70px'
  },
  overlay:{
    background:'rgba(0,0,0,0.5)',
    height:'1000px',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    padding:'20px 300px'
  },
  formCover:{
    border:'1px solid red',
    height:'100%',
    width:'200px'
  }
};

const Login = () => {
  return (
    <Box sx={{overflow:'scroll',height:'730px'}}>
      <Box sx={styles.container}>
           <Grid container sx={styles.overlay}>
                 <Grid item md={12} sm={12} xs={12}  sx={styles.formCover}>
                      
                 </Grid>
           </Grid>

      </Box>
    </Box>
  );
};

export default Login;
