import React from 'react';
import { Box, Typography } from '@mui/material';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const { pictureUrl, title, description, price } = item;

    const handleAdd = () => {
        alert(`${title} agregado al carrito`);
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
                <ItemCount
                    product={title}
                    stock={5}
                    onAddFn={handleAdd}
                    initial={1}
                />
                <Box sx={{ marginTop: '1rem' }}>{description}</Box>
            </Box>
        </Box>
    );
};

export default ItemDetail;
