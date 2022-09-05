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
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import EpisodeContainer from '../../component/shows-utils/EpisodeContainer'
// import data from '../../component/shows-utils/shows.json'
import { useContext } from 'react'
import { AppContext } from '../../component/context/AppContext'
import axios from 'axios'
import { API_INSTANCE } from '../../app-config/index.'
import FilterListIcon from '@mui/icons-material/FilterList';
import episodes from '../../component/shows-utils/episodes.json'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// const getData = async () => {
//     try {
//         const res = await axios.get(`${API_INSTANCE}/get-shows`)
//         // const result = await res.json()
//         setShows(res.data)
//         console.log(res.data)

//     } catch (err) {
//         console.log(err.message)
//     }
// }


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

    const { showsDetails, setShowDetails } = useContext(AppContext)
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <Box sx={{ color: '#fff', background: 'red' }}>
            <Grid container sx={{ background: 'red' }}>
                <Grid item md={4} sm={12} sx={{ ...styles.gridItems, background: '#111' }}>

                    <Box sx={{ ...styles.showsImg, background: `url(${showsDetails.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* <img src={showsDetails.img} width={'100%'} height={'100%'}  style={{objectFit:'cover', backgroundRepeat:'no-repeat'}} /> */}
                    </Box>

                    <Box sx={{ ...styles.bottomHalf }}>
                        <Box sx={{ ...styles.episodeContent }}>
                            <Typography color="#f3f3f3" variant="p" fontSize={18} fontWeight={'bold'} letterSpacing={2}>
                                {showsDetails.title}
                            </Typography>
                        </Box>
                        <Box sx={{ ...styles.episodeContent }}>
                            <Typography color="#f3f3f3" variant="p" fontSize={14} textTransform={'uppercase'}>
                                Description :
                            </Typography>
                            <Typography color="#999" variant="p" fontSize={14} marginLeft={1} >
                                {showsDetails.description}
                            </Typography>
                        </Box>
                        <Box sx={{ ...styles.episodeContent }}>
                            <Typography color="#f3f3f3" variant="p" fontSize={14} textTransform={'uppercase'}>
                                Last-updated :
                            </Typography>
                            <Typography color="#999" variant="p" fontSize={14} marginLeft={1}>
                                {showsDetails.lastUpdated}
                            </Typography>
                        </Box>
                        <Box sx={{ ...styles.episodeContent }}>
                            <Typography color="#f3f3f3" variant="p" fontSize={14} textTransform={'uppercase'}>
                                Visibility :
                            </Typography>
                            <Typography color="#999" variant="p" fontSize={14} marginLeft={1}>
                                {/* {showsDetails.visibility} */}
                                public
                            </Typography>
                        </Box>
                        <Box sx={{ ...styles.episodeContent, flex: 2, borderTop: '1px solid #444' }}>
                            <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50, color: '#fff' }} />
                            <Typography color="#f3f3f3" variant="p" fontSize={14} textTransform={'uppercase'}>

                            </Typography>
                            <Typography color="#999" variant="p" fontSize={14} marginLeft={1}>
                                {/* {showsDetails.visibility} */}
                                schadrackbotombe@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={8} sm={12} sx={{ ...styles.gridItems, background: '#030303', padding: 0 }}>
                    <Box sx={{ ...styles.sortContainer }}>
                        <FilterListIcon />
                        <input
                            // value={searchTem}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder='filter...'
                            style={{ color: "#fff", padding: '14px 0px', margin: '10px 0px', width: '70%', background: 'transparent', }}
                        />
                    </Box>
                    <DragDropContext>
                        <Droppable
                            droppableId='episodeSequence'
                            direction="vertical"
                            type="row"
                        >
                            {(provided) => (
                                <Box
                                    {...provided.droppableProps}
                                    {...provided.dragHandleProps}
                                    // ref="provided.innerRef"
                                    sx={{ height: '90%', overflowY: 'auto', }}>

                                    {episodes.filter(val => {
                                        if (searchTerm == "") {
                                            return val
                                        } if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val
                                        }
                                    }).map((episode, index) => (
                                        <EpisodeContainer index={index} title={episode.title} description={episode.description} img={episode.img} />
                                    ))}
                                    {provided.placeholder}
                                </Box>

                            )}
                        </Droppable>
                    </DragDropContext>
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
        height: '45%',
        // border: '1px solid blue'
    },
    titleContainer: {
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px'
    },
    sortContainer: {
        borderBottom: '1px solid #111',
        height: '10%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10px',
        gap: 2

    },
    inputContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        borderTop: '1px solid #222',
        padding: '0 15px'
    },
    bottomHalf: {
        // border: '1px solid blue',
        height: '55%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 20px'

    },
    episodeContent: {
        flex: 1,
        // border: '1px solid yellow',
        display: 'flex',
        alignItems: 'center',

    }

}