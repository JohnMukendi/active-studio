import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import ReorderIcon from "@mui/icons-material/Reorder";

const EpisodeContainer = ({
  title,
  img,
  description,
  providerPlaceHolder,
  index,
}) => {
  return (
    <Draggable
      draggableId={`draggable-${index}`}
      key={`draggable-${index}`}
      index={index}
    >
      {(provided) => (
        <Grid container sx={styles.container} {...provided.draggableProps}>
          <Grid item md={0.5} sx={{ ...styles.draglist }}>
            <ReorderIcon size={30} />
          </Grid>
          <Grid item md={3} sm={null} xs={null} sx={styles.item}>
            <Box
              sx={{
                ...styles.cover,
                background: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box sx={styles.videoLength}>
                <Typography variant="p" fontSize={14}>
                  {"04:45"}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8.5} sm={null} xs={null} sx={styles.item}>
            <Box sx={styles.title}>
              <Typography variant="h1" fontSize={16} color={'#f7f7f7'}>Episode :</Typography>
              <Typography variant="h1" fontSize={16} marginLeft={1} color={'#666'}>
                {title}
              </Typography>
            </Box>
            <Box sx={styles.description}>
              <Typography variant="p" color="#555" fontSize={14}>
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Draggable>
  );
};

export default EpisodeContainer;

const styles = {
  container: {
    borderBottom: "1px solid  #272727",
    height: "120px",
    width: "100%",
    // marginTop: "20px",
  },
  item: {
    height: "100%",
    // border:'1px solid red',
    padding: "10px",
  },
  cover: {
    // border:'1px solid  orange',
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    // border:'1px solid  #00fff2',
  },
  description: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    // border:'1px solid  #04ff00',
  },
  draglist: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
  },
  videoLength: {
    background: "rgba(0,0,0,0.8)",
    padding: "2px 10px",
    margin: "2px",
    width: "auto",
  },
};
