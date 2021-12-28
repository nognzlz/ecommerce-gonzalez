import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { CarritoContext } from '../context/CarritoProvider';

export const Checkout = () => {
    const { carrito } = useContext(CarritoContext);
    return (
        <Box sx={{ padding: '1rem' }}>
            <Typography variant="h5">Los items de tu carrito son:</Typography>
            <ul>
                {carrito.map(({ title, quantity }) => (
                    <li>
                        {title} - cantidad: {quantity}
                    </li>
                ))}
            </ul>
        </Box>
    );
};
