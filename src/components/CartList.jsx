import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { CarritoContext } from '../context/CarritoProvider';
import { CartItem } from './CartItem';

export const CartList = () => {
    const { carrito } = useContext(CarritoContext);
    return (
        <Box>
            {carrito.map(({ id, title, quantity }) => (
                <CartItem id={id} title={title} key={id} quantity={quantity} />
            ))}
        </Box>
    );
};
