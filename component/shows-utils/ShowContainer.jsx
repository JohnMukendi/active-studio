import React from "react";
import { Grid } from "@mui/material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../component/context/AppContext";
import ListIcon from "@mui/icons-material/List";
import Link from "next/link";
import axios from "axios";
import { API_INSTANCE } from "../../app-config/index.";

const ShowContainer = ({
  show,
  title,
  img,
  description,
  time,
  likes,
  link,
  count,
  lastUpdated,
}) => {
  const [visibility, setVisibility] = useState(show.visible); //boolean type to toggle through public and private
  const [buttonType, setbuttonType] = useState("success"); //boolean type to toggle through public and private
  const { showsDetails, setShowDetails, DisplayShowDetails } =
    useContext(AppContext);


  const toggleVisibility = async () => {
    setVisibility(visibility ? false : true)
    const data = { ...show, visible: visibility , timestamp: new Date().toLocaleString() };

    var config = {
      method: 'POST',
      // url: `${API_INSTANCE}/create-shows`,
      url: 'https://nahgp463k7.execute-api.us-east-2.amazonaws.com/Stage/create-shows' ,
      data: JSON.stringify(data)
    };
    const res = await axios(config)
    console.log(res)
    if (visibility) {
      setbuttonType("success");
    } else {
      setbuttonType("error");
    }
  };

  return (
    <Grid container sx={styles.container}>
      <Grid sx={{ ...styles.items, justifyContent: "flex-start" }} item md={6}>
        <Link href={"/shows_episode/ " + link}>
          <a style={{ height: "100%" }}>
            <Box
              onClick={() => {
                DisplayShowDetails(title, description, img,likes ,count, lastUpdated );
              }}
              sx={{
                border: "1px solid #484747",
                height: "100%",
                width: "150px",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "40%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  background: "rgba(1,1,1,.7)",
                  alignItems: "center",
                }}
              >
                {count}
                <ListIcon />
              </Box>
            </Box>
          </a>
        </Link>
        <Box sx={styles.showsContent}>
          <Typography color="#ececec">{title}</Typography>
          <Typography sx={{ ...styles.descriptionBox }} color="#4e4e4e">
            {description}
          </Typography>
        </Box>
      </Grid>
      <Grid sx={{ ...styles.items }} item md={2}>
        <Button
          variant={null}
          onClick={toggleVisibility}
          sx={{ "&:hover": { background: "#111" } }}
        >
          {visibility ? (
            <>
              <VisibilityIcon sx={{ margin: "0 10px", color: "#dadada" }} />
              <Typography variant="h3" fontSize={14} color="#888">
                {"public"}
              </Typography>
            </>
          ) : (
            <>
              <VisibilityOffIcon sx={{ margin: "0 10px", color: "#333" }} />
              <Typography variant="h3" fontSize={14} color="#888">
                {"private"}
              </Typography>
            </>
          )}
        </Button>
      </Grid>
      <Grid sx={{ ...styles.items }} item md={2}>
        <Typography variant="h3" fontSize={14} color="#888">
          {lastUpdated}
        </Typography>
      </Grid>
      <Grid sx={{ ...styles.items }} item md={2}>
        <Typography variant="h3" fontSize={14} color="#888">
          {likes}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ShowContainer;

const styles = {
  container: {
    width: "100%",
    //  marginTop:'20px',
    border: "1px solid #222",
  },
  // showsImgCover: {
  //   border: "1px solid #484747",
  //   height: "100%",
  //   width: "150px",
  //   backgroundImage: img,
  // },
  items: {
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 15px",
    // display:'flex',
    // alignItems:'center',
    // justifyContent:'center',
  },
  img: {
    height: "90px",
    width: "100%",
    objectFit: "cover",
  },
  showsContent: {
    height: "100%",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    overflow: "hidden",
    position: "relative",
    display: "inline-block",
    margin: "0 5px 0 5px",
    textDecoration: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: " #000",
  },
  descriptionBox: {
    width: "140px",
    padding: "0",
    overflow: "hidden",
    position: "relative",
    display: "inline-block",
    textDecoration: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};
