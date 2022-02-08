import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoProvider';

import { ListItem, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const CartItem = ({ id, title, quantity, totalPrice }) => {
    const { deleteItem } = useContext(CarritoContext);
    return (
        <ListItem
            sx={{ boxShadow: 1, margin: '1rem 0', padding: '1rem' }}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText primary={`${title} - Cantidad ${quantity}`} />
            <ListItemText
                secondary={`$${totalPrice}`}
                secondaryTypographyProps={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textAlign: 'end',
                    marginRight: 4,
                }}
            />
        </ListItem>
    );
};
