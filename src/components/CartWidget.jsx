import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

const CartWidget = ({ itemsAmount }) => {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.root}>
            <Box>
                <ShoppingCartIcon className={classes.icon} />
                <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.cartAmount}
                >
                    {itemsAmount}
                </Typography>
            </Box>
        </Paper>
    );
};

export default CartWidget;
