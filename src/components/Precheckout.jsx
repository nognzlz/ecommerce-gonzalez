import { Typography, Paper, Button, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Precheckout = () => {
    return (
        <Paper variant="outlined" sx={{ padding: '1rem', bgcolor: 'success.main' }}>
            <Typography mb={2} sx={{ color: '#FFFFFF' }}>
                Producto Agregado al carrito!
            </Typography>
            <Box
                sx={{
                    display: { md: 'flex', xs: 'block' },
                    justifyContent: { md: 'space-between' },
                }}
            >
                <Button variant="outlined" component={Link} to={'/'} sx={{ marginTop: { xs: 1 } }}>
                    Seguir comprando
                </Button>
                <Button
                    variant="outlined"
                    component={Link}
                    sx={{ marginTop: { xs: 1 } }}
                    to={'/cart'}
                >
                    Terminar mi compra
                </Button>
            </Box>
        </Paper>
    );
};
