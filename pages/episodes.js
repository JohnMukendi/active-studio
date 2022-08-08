import { Box } from "@mui/material";
import withAdminNav from "./hoc/withAdminNav";
import EdpisodesModal from "../component/Popup/EpisodesModal";




const episodes = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
            }}
        >
            <h1>EPISODES</h1>
            <EdpisodesModal/>
        </Box>
    );
}


export default withAdminNav(episodes)