import {Box, Container, Typography} from "@mui/material";


const Layout = ({ children }) => {
    return(
    <Box sx={{my: 4}}>
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
