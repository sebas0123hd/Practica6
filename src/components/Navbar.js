import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";

const Navbar = ({}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Sidebar />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;