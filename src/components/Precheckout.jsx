import { Typography, Paper, Button, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Precheckout = () => {
    return (
        <Paper variant="outlined" sx={{ padding: '1rem', bgcolor: 'success.main' }}>
            <Typography sx={{ color: '#FFFFFF' }}>Producto Agregado al carrito!</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} to={'/'}>
                    Seguir comprando
                </Button>
                <Button component={Link} to={'/checkout'}>
                    Ir al checkout
                </Button>
            </Box>
        </Paper>
    );
};
