import React, { useState } from 'react';
import { Toolbar, Typography, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SideBar from './SideBar';
import CartWidget from './CartWidget';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
}));

const NavBar = ({ title }) => {
    const classes = useStyles();
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setSideBarOpen(open);
    };

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleSideBar(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }} variant="h6">
                        {title}
                    </Typography>
                    <CartWidget itemsAmount={1} />
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
            <SideBar
                open={sideBarOpen}
                toggleSideBar={toggleSideBar}
                items={['Productos', 'Contactenos']}
            ></SideBar>
        </React.Fragment>
    );
};

export default NavBar;