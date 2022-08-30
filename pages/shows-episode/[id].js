// import React from 'react'
// import { Box } from '@mui/system'
// import { Grid} from '@mui/material'
// import {Typography} from '@mui/material'
// import EpisodeContainer from '../../component/shows-utils/EpisodeContainer'
// import data from '../../component/shows-utils/shows.json'
// import { useContext } from 'react'
// import { AppContext } from '../../component/context/AppContext'

// // export const getStaticPaths = async () => {

// //     //   const res = await fetch('')
// //     //   const data = await res.json()
// //     //  const jsonData = data

// //     const paths = data.map(show => {
// //         return {
// //             params: { id: data.id.toString() }
// //         }
// //     })

// //     return {
// //         paths,
// //         fallback: false
// //     }

// // }

// // export const getStaticProps = async () =>{

// //  const id  = context.params.id;
// //  const res = await fetch('')
// //  const data = await res.json()

// //  return{
// //     props:{shows:data}
// //  }
// // }



// const ShowsPage = () => {

// const {showsDetails , setShowDetails } = useContext(AppContext)


//     return (
//         <Box sx={{ color: '#fff' }}>
//             <Grid container>
//                 <Grid item md={4} sm={12} sx={styles.gridItems}>
//                     <Box sx={styles.showsImg}>
                     
//                     </Box>
//                     <Typography variant="h1" fontSize={20} color="#fff">
//                     {showsDetails.title}
//                     </Typography>
//                 </Grid>
//                 <Grid item md={8} sm={12} sx={styles.gridItems}>
//                     <Box sx={{ height: '100%', overflowY: 'auto' }}>
//                         <EpisodeContainer />
//                         <EpisodeContainer />
//                         <EpisodeContainer />
//                         <EpisodeContainer />
//                         <EpisodeContainer />
//                         <EpisodeContainer />
//                         <EpisodeContainer />
//                         <EpisodeContainer />
//                         <EpisodeContainer />

//                     </Box>

//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }

// export default ShowsPage



// const styles = {
//     container: {

//     },
//     gridItems: {
//         //  border:'1px solid red',
//         height: {
//             md: '100vh',
//             sm: '50vh'
//         },
//         padding: '10px',

//     },

//     showsImg: {
//         width: '100%',
//         height: '50%',
//         border: '1px solid blue'
//     }

// }

import React from 'react'
import { Box } from '@mui/system'
import { Grid} from '@mui/material'
import {Typography} from '@mui/material'
import EpisodeContainer from '../../component/shows-utils/EpisodeContainer'
// import data from '../../component/shows-utils/shows.json'
import { useContext } from 'react'
import { AppContext } from '../../component/context/AppContext'
import axios from 'axios'
import { API_INSTANCE } from '../../app-config/index.'


const getData = async ()=>{
    try{
        const res = await axios.get(`${API_INSTANCE}/get-shows`)
        // const result = await res.json()
        setShows(res.data)
       console.log(res.data)

    }catch(err){
         console.log(err.message)
    }
}


// export const getStaticPaths = async () => {

//     //   const res = await fetch('')
//     //   const data = await res.json()
//     //  const jsonData = data
     
//     const res = await axios.get(`${API_INSTANCE}/get-shows`)
//     const data = res.data
//     console.log(data,'data from get static paths')


//     const paths = data.map(show => {
//         return {
//             params: { id: show.Title.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }

// }

// export const getStaticProps = async (context) =>{

//  const id  = context.params.id
//  const res = await axios.get(`${API_INSTANCE}/get-shows`) // there is an issue specifying the params id so using context might be the best solution 
//  const data =  res.data
//  const result = ``

//  return {
//     props:{shows:data}
//  }
// }



const ShowsPage = () => {

const {showsDetails , setShowDetails } = useContext(AppContext)


    return (
        <Box sx={{ color: '#fff' }}>
            <Grid container>
                <Grid item md={4} sm={12} sx={styles.gridItems}>
                    <Box sx={{...styles.showsImg, background:`url(${showsDetails.img})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                        {/* <img src={showsDetails.img} width={'100%'} height={'100%'}  style={{objectFit:'cover', backgroundRepeat:'no-repeat'}} /> */}
                    </Box>
                    <Typography variant="h1" marginTop={2} fontSize={20} color="#fff">
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
        // border: '1px solid blue'
    }

}