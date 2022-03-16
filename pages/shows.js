import { Box } from "@mui/material";
import withAdminNav from "./hoc/withAdminNav";
import TransitionsModal from '../component/Modal'




const Shows = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
            }}
        >
            <h1>SHOWS</h1>
            <TransitionsModal/>
        </Box>
    );
}


export default withAdminNav(Shows)