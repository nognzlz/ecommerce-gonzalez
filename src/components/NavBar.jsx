import React, { useState, useContext } from 'react';
import { Toolbar, Typography, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SideBar from './SideBar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

import { CarritoContext } from '../context/CarritoProvider';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
}));

const NavBar = ({ title }) => {
    const classes = useStyles();
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const { carrito } = useContext(CarritoContext);

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
                    <Typography
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: '#212121',
                        }}
                        variant="h6"
                        component={Link}
                        to="/"
                    >
                        {title}
                    </Typography>
                    <CartWidget itemsAmount={carrito.length} />
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
            <SideBar
                open={sideBarOpen}
                toggleSideBar={toggleSideBar}
                items={[
                    { name: 'Organicos', route: '/category/organicos' },
                    { name: 'Sin TACC', route: '/category/sin-tacc' },
                    { name: 'Proteicos', route: '/category/proteicos' },
                ]}
            ></SideBar>
        </React.Fragment>
    );
};

export default NavBar;
