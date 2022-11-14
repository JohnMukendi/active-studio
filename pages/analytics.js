import { Box } from "@mui/material";
import withAdminNav from "./hoc/withAdminNav";
import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


const Analytics = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        justifyContent:'center',
        height:'310px'
      }));
    return (
        // <Box
        //     sx={{
        //         height: "100vh",
        //         width: "100%",
        //     }}
        // >
        //     <h1>ANALYTICS</h1>
        // </Box>
        <Box className="analytics" sx={{height:'155vh', flexGrow: 1,padding:'100px 20px',justifyContent:
        'center'}}>
                <Box sx={{margin:'0 0 0 0'}}>
              <Grid xs={12} className='crd' container spacing={2}>
            <Grid item xs={4}>
              <Item className='crd'>
                <Typography className={"active-tv-font"} >
                    Views
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                <CircularProgress />
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    Number
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className='crd'>
                <Typography className={"active-tv-font"}>
                    Subscribers
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    <CircularProgress />
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    Number
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className='crd'>
                <Typography className={"active-tv-font"}>
                    Top Videos
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    <CircularProgress />
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    Number
                </Typography>
              </Item>
            </Grid>
          </Grid>
                </Box>
      
             
                <Box sx={{margin:'100px 0 0 0'}}>
     <Grid xs={12} className='crd' container spacing={2}>            
           <Grid item xs={4}>
              <Item className='crd'>
                <Typography className={"active-tv-font"}>
                    Storage
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    <CircularProgress />
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    Number
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className='crd'>
                <Typography className={"active-tv-font"}>
                     Subscribers P/M
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    <CircularProgress />
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    Number
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className='crd'>
                <Typography className={"active-tv-font"}>
                     Subscribers P/Y
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    <CircularProgress />
                </Typography>
                <Typography sx={{margin:'35% 0 0 0'}} className={"active-tv-font"}>
                    Number
                </Typography>
              </Item>
            </Grid>
          </Grid>
                </Box>
    
        </Box>
    );
}

export default withAdminNav(Analytics)