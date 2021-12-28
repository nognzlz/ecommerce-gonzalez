import React, { useState, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import ItemCount from './ItemCount';
import { CarritoContext } from '../context/CarritoProvider';
import { Precheckout } from './Precheckout';

const ItemDetail = ({ item }) => {
    const { pictureUrl, title, description, price } = item;
    const [showItemCount, setShowItemCount] = useState(true);
    const { carrito, setCarrito } = useContext(CarritoContext);

    const handleAdd = (product) => {
        if (carrito.some(({ id }) => id === product.id)) {
            alert(`ya tienes ${product.title} en el carrito. No se agregó el producto`);
            return;
        }
        setShowItemCount(false);
        setCarrito([...carrito, product]);
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
            <Box sx={{ width: 1, marginBottom: '1rem' }}>
                <Typography variant={'h2'}>{title}</Typography>
            </Box>
            <Box sx={{ width: 0.5, userSelect: 'none' }}>
                <img src={pictureUrl} alt={title} style={{ width: '100%' }} />
            </Box>
            <Box
                sx={{
                    justifyContent: 'center',
                    paddingLeft: '0.5rem',
                    width: 0.5,
                }}
            >
                <Box sx={{ padding: '1rem' }}>
                    <Typography variant={'h3'}>{price}</Typography>
                </Box>
                {showItemCount && (
                    <ItemCount product={item} stock={5} onAddFn={handleAdd} initial={1} />
                )}
                {!showItemCount && <Precheckout />}
                <Box sx={{ marginTop: '1rem' }}>{description}</Box>
            </Box>
        </Box>
    );
};

export default ItemDetail;
