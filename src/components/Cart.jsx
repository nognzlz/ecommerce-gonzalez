import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CartList } from './CartList';
import { CarritoContext } from '../context/CarritoProvider';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { carrito } = useContext(CarritoContext);
    return (
        <Box>
            {!!carrito.length ? (
                <Box sx={{ padding: '1rem 0' }}>
                    <Typography variant="h3">Los items de tu carrito son:</Typography>
                    <CartList />
                </Box>
            ) : (
                <Box sx={{ padding: '1rem 0' }}>
                    <Typography variant="h3">No hay productos en tu compra</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Button component={Link} to="/">
                            Ir al inicio
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};
