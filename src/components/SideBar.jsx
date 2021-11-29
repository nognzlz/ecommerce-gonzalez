import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';

export const SideBar = ({ open, toggleSideBar, items }) => {
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleSideBar(false)}
            onKeyDown={toggleSideBar(false)}
        >
            <List>
                {items.map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text}></ListItemText>
                    </ListItem>
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
