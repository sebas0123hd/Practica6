import {Box, Container, Typography} from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
    return(
    <Box sx={{my: 4}}>
        <Navbar />
        <Sidebar />
        <Container className="container">
            {children}
    </Container>

        <Box className="footer">
            <Typography>Derechos reservados</Typography>
        </Box>
    </Box>
    )
};

export default Layout;
