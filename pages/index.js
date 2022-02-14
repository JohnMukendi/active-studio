import { Box } from "@mui/material";
import withAdminNav from "./hoc/withAdminNav";

const Admin = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
            }}
        >
            <h1>DASHBOARD</h1>
        </Box>
    );
}

export default withAdminNav(Admin)