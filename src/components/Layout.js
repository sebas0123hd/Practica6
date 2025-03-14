import {Box, Container, Typography} from "@mui/material";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return(
    <Box>
        <Navbar />
        <Container className="container">
            {children}
    </Container>

        <Box className="footer">
            <Typography variant="h6" component="h1">
                Derechos reservados
            </Typography>
        </Box>
    </Box>
    )
};

export default Layout;
