import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CarritoContext } from '../context/CarritoProvider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 40,
        cursor: 'pointer',
    },
    icon: {
        verticalAlign: 'middle',
    },
    cartAmount: {
        display: 'inline-block',
        paddingLeft: 10,
    },
}));

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.root} component={Link} to="/cart">
            <Box>
                <ShoppingCartIcon className={classes.icon} />
                <Typography variant="body1" gutterBottom className={classes.cartAmount}>
                    {carrito.length}
                </Typography>
            </Box>
        </Paper>
    );
};

export default CartWidget;
