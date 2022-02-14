import { Box } from "@mui/material";
import withAdminNav from "./hoc/withAdminNav";

const Shows = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
            }}
        >
            <h1>SHOWS</h1>
        </Box>
    );
}


export default withAdminNav(Shows)