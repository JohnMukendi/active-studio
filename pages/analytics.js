import { Box } from "@mui/material";
import withAdminNav from "./hoc/withAdminNav";
import React, {useState , useEffect} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress,{
    CircularProgressProps
  } from '@mui/material/CircularProgress';
import CircularStatic from "../component/Circular";
import { API_INSTANCE } from "../app-config/index.";
import axios from "axios";
// import CircularProgress, {
//     CircularProgressProps,
//   } from '@mui/material/CircularProgress';

  


const Analytics = () => {
    const [ accounts , setAccounts ] = useState([])
    const [ views , setViews ] = useState([])
    const getUsers = async () => {
        const response = await axios.get(`${API_INSTANCE}/get-accounts`);
        console.log(response)
        response.data.users ? setAccounts(response.data.users) : []
    }

    const localShows = [
        {
            id:'1',
            views:'32'
        },
        {
            id:'1',
            views:'50'
        },
        {
            id:'1',
            views:'23'
        },
        {
            id:'1',
            views:'45'
        },
        
    ]

    const getViews = () => {
        let localViews = 0;
        localShows.map((item)=>{
            localViews = localViews + Number(item.views)
        })

        setViews(localViews)
    }
    // const getViews = async () => {
    //     const response = await axios.get(`${API_INSTANCE}/get-shows`);
    //     console.log(response)
    
    //     response.data[0].views ? setViews(100) : 0
    // }

    console.log("accounts : " ,accounts)
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        justifyContent:'center',
        height:'310px'
      }));

    useEffect(()=>{
        getUsers()
        getViews()
    },[])
 
    return (
        <Box 
        className="analytics" 
            sx={{
                height: "150vh",
                width: "100%",
                
            }}
        >
             <Box sx={{height:'200vh', flexGrow: 1,padding:'150px 20px',justifyContent:
    'center', overflowY:'auto',}}>
            <Box sx={{margin:'0 0 0 0'}}>
          <Grid xs={12} className='crd' container spacing={2}>
        <Grid item xs={4}>
          <Item className='crd'>
            <Typography  >
                Views
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
            <CircularStatic value={views} />
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
            
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='crd'>
            <Typography >
                Subscribers
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
            <CircularStatic value={accounts.length} />
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
                Number
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='crd'>
            <Typography >
                Top Videos
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
            <CircularStatic />
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
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
            <Typography >
                Storage
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
            <CircularStatic />
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
                Number
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='crd'>
            <Typography >
                 Subscribers P/M
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
            <CircularStatic />
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
                Number
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='crd'>
            <Typography >
                 Subscribers P/Y
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
            <CircularStatic />
            </Typography>
            <Typography sx={{margin:'45% 0 0 0'}} >
                Number
            </Typography>
          </Item>
        </Grid>
      </Grid>
            </Box>

    </Box>
        </Box>
       
    );
}

// React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;

export default withAdminNav(Analytics)