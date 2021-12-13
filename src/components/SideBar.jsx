import React from 'react';
import { Drawer, Box, List, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const SideBar = ({ open, toggleSideBar, items }) => {
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleSideBar(false)}
            onKeyDown={toggleSideBar(false)}
        >
            <List>
                <ListItemButton component={NavLink} to={'/'}>
                    <ListItemText primary="Inicio"></ListItemText>
                </ListItemButton>
                {items.map(({ name, route }) => (
                    <ListItemButton component={NavLink} to={route} key={name}>
                        <ListItemText primary={name}></ListItemText>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer open={open} anchor={'left'} onClose={toggleSideBar(false)}>
            {list()}
        </Drawer>
    );
};

export default SideBar;
