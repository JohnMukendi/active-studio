import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const GuideBar = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid sx={{ ...styles.items, justifyContent: "flex-start" }} item md={6}>
        <Typography variant="h3" fontSize={16} color="#888">
          Playlist
        </Typography>
      </Grid>
      <Grid sx={styles.items} item md={2}>
        <Typography variant="h3" fontSize={16} color="#888">
          Visibility
        </Typography>
      </Grid>
      <Grid sx={styles.items} item md={2}>
        <Typography variant="h3" fontSize={16} color="#888">
          Last updated
        </Typography>
      </Grid>
      <Grid sx={styles.items} item md={2}>
        <Typography variant="h3" fontSize={16} color="#888">
          Video count
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GuideBar;

const styles = {
  container: {
    minHeight: "50px",
    width: "100%",
    border: "1px solid #222",
  },
  items: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 15px",
  },
};
