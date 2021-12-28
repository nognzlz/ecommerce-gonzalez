import React from 'react';
import Item from './Item';
import Box from '@mui/material/Box';

const ItemList = ({ items }) => {
    return (
        <Box sx={{ marginTop: '1rem' }}>
            {items
                ? items.map((item) => <Item item={item} key={item.id}></Item>)
                : 'cargando...'}
        </Box>
    );
};

export default ItemList;
