import Box from '@mui/material/Box';
import withAdminNav from "./hoc/withAdminNav";
import TransitionsModal from '../component/Popup/Modal'
import ShowContainer from '../component/shows-utils/ShowContainer';
import { useEffect, useState } from 'react';
import GuideBar from '../component/shows-utils/GuideBar';
import data from '../component/shows-utils/shows.json'
import { Typography } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

// icons
import FilterListIcon from '@mui/icons-material/FilterList';
import { API_INSTANCE } from '../app-config/index.';
import axios from 'axios';


const Shows = () => {

    const [filterTerm, setFilterTerm] = useState("")
    const [shows, setShows] = useState([])

    const getData = async ()=>{
        const res = await axios.get(`${API_INSTANCE}/get-shows`)
        // const result = await res.json()
        setShows(res.data)
       console.log(res)
    }

    useEffect(()=>{
        // const getData = axios.get(`${API_INSTANCE}/get-shows`)
        getData()
    },[])

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                background: '#111',
                // padding: '20px',

            }}
        >

            <Typography color="#222" variant='h1' sx={{ margin: "" }}>
                Watch shows
            </Typography>
            <Box sx={styles.inputContainer}>
                <FilterListIcon sx={{ color: '#999' }} />
                <input
                    placeholder='filter...'
                    style={{ color: "#fff", padding: '10px', margin: '10px 0', width: '90%', background: 'transparent' }}
                    onChange={(e) => setFilterTerm(e.target.value)}
                />

            </Box>

            <GuideBar />

            {shows.filter((filterVal) => {
                if (filterTerm == "") {
                    return filterVal
                } else if (filterVal.Title.toLocaleLowerCase().toLocaleUpperCase().includes(filterTerm.toLocaleLowerCase().toLocaleUpperCase())) {
                    return filterVal
                }
            }).map((item) => (
                <ShowContainer likes={item.likes} title={item.Title} count={item.episodes.length} link={item.id} img={item.CoverArtLarge} lastUpdated={item.timestamp} description={item.description} />
            ))}


        </Box>
    );
}


export default withAdminNav(Shows)



const styles = {
    inputContainer: {
        width: '100%',
        height: 'auto',
        borderTop: '1px solid #222',
        padding: '0 15px'
    }
}


