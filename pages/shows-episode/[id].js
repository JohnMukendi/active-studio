import React from 'react'
import { Box } from '@mui/system'
import { Grid} from '@mui/material'
import {Typography} from '@mui/material'
import EpisodeContainer from '../../component/shows-utils/EpisodeContainer'
import data from '../../component/shows-utils/shows.json'
import { useContext } from 'react'
import { AppContext } from '../../component/context/AppContext'

// export const getStaticPaths = async () => {

//     //   const res = await fetch('')
//     //   const data = await res.json()
//     //  const jsonData = data

//     const paths = data.map(show => {
//         return {
//             params: { id: data.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }

// }

// export const getStaticProps = async () =>{

//  const id  = context.params.id;
//  const res = await fetch('')
//  const data = await res.json()

//  return{
//     props:{shows:data}
//  }
// }



const ShowsPage = () => {

const {showsDetails , setShowDetails } = useContext(AppContext)


    return (
        <Box sx={{ color: '#fff' }}>
            <Grid container>
                <Grid item md={4} sm={12} sx={styles.gridItems}>
                    <Box sx={styles.showsImg}>
                     
                    </Box>
                    <Typography variant="h1" fontSize={20} color="#fff">
                    {showsDetails.title}
                    </Typography>
                </Grid>
                <Grid item md={8} sm={12} sx={styles.gridItems}>
                    <Box sx={{ height: '100%', overflowY: 'auto' }}>
                        <EpisodeContainer />
                        <EpisodeContainer />
                        <EpisodeContainer />
                        <EpisodeContainer />
                        <EpisodeContainer />
                        <EpisodeContainer />
                        <EpisodeContainer />
                        <EpisodeContainer />
                        <EpisodeContainer />

                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default ShowsPage



const styles = {
    container: {

    },
    gridItems: {
        //  border:'1px solid red',
        height: {
            md: '100vh',
            sm: '50vh'
        },
        padding: '10px',

    },

    showsImg: {
        width: '100%',
        height: '50%',
        border: '1px solid blue'
    }

}