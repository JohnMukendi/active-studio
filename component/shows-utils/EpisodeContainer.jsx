import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import {Typography} from '@mui/material'

const EpisodeContainer = ({title,img, description}) => {

  return (
    <Grid container sx={styles.container}>
          <Grid item md={3} sm={null} xs={null} sx={styles.item}>
                 <Typography>
                  hello world
                 </Typography>
          </Grid>
          <Grid item md={3} sm={null} xs={null} sx={styles.item}>
                 <Typography>
                  hello world
                 </Typography>
          </Grid>
          <Grid item md={3} sm={null} xs={null} sx={styles.item}>
                 <Typography>
                  hello world
                 </Typography>
          </Grid>
          <Grid item md={3} sm={null} xs={null} sx={styles.item}>
                 <Typography>
                  hello world
                 </Typography>
          </Grid>
    </Grid>
  )
}

export default EpisodeContainer



const styles = {

  container:{
    border:'1px solid  #fbff00',
    height:'120px',
    width:'100%',
    marginTop:'20px'
  },
  item:{
    border:'1px solid red',
    height:'100%'
  }

}



