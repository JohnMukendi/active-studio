import { Box } from "@mui/material";
import withAdminNav from "./hoc/withAdminNav";

const Customization = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
            }}
        >
            <h1>CUSTOMIZATION</h1>
        </Box>
    );
}

export default withAdminNav(Customization)
