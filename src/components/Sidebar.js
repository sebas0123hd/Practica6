import React, { useState } from "react";
import {Drawer, List, ListItem, ListItemText, IconButton, Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            {/* Botón de menú */}
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>

            {/* Menú lateral */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box className="sidebar">
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemText primary="Inicio" />
                        </ListItem>
                        <ListItem button component={Link} to="/about">
                            <ListItemText primary="Sobre Nosotros" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;