import { Box, Typography, FormControl, InputLabel, Input, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { CarritoContext } from '../context/CarritoProvider';
import { sendOrder } from '../services/order';
import { Link } from 'react-router-dom';

import React, { useState, useContext, useEffect } from 'react';

export const CheckoutForm = ({ setShowCart }) => {
    const { carrito, clearCart } = useContext(CarritoContext);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [form, setForm] = useState({
        buyer: {
            email: '',
            name: '',
            phone: '',
        },
        total: carrito.reduce((a, b) => {
            return a + Number(b.price.split('$')[1]) * b.quantity;
        }, 0),
        items: carrito,
    });

    useEffect(() => {
        setForm((form) => ({
            ...form,
            total: carrito.reduce((a, b) => {
                return a + Number(b.price.split('$')[1]) * b.quantity;
            }, 0),
            items: carrito,
        }));
    }, [carrito]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await sendOrder(form);
        if (result) {
            setSuccess(true);
        } else {
            setError(true);
        }
        clearCart();
        setLoading(false);
        setShowCart(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, buyer: { ...form.buyer, [name]: value } });
    };

    return carrito.length > 0 || success || error ? (
        loading ? (
            <Paper sx={{ margin: '1rem', padding: '1rem', width: '100%' }}>
                <Typography variant="h5"> Procesando tu orden ...</Typography>
            </Paper>
        ) : success ? (
            <Paper sx={{ margin: '1rem', padding: '1rem', width: '100%', bgcolor: 'success.main' }}>
                <Typography variant="h5"> Tu orden fue cargada exitosamente!</Typography>
                <Button component={Link} to="/">
                    Ir al inicio
                </Button>
            </Paper>
        ) : error ? (
            <Paper sx={{ margin: '1rem', padding: '1rem', width: '100%', bgcolor: 'error.main' }}>
                <Typography variant="h5"> Lo sentimos, no pudimos procesar tu orden</Typography>
                <Button component={Link} to="/">
                    Ir al inicio
                </Button>
            </Paper>
        ) : (
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h3">Datos del recipiente</Typography>
                <Paper sx={{ margin: '1rem', padding: '1rem', width: '100%' }}>
                    <FormControl fullWidth sx={{ margin: '1rem' }}>
                        <InputLabel htmlFor="name">Nombre Completo</InputLabel>
                        <Input id="name" name="name" onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: '1rem' }}>
                        <InputLabel htmlFor="phone">Telefono</InputLabel>
                        <Input id="phone" name="phone" onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: '1rem' }}>
                        <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                        <Input id="email" name="email" onChange={handleChange} />
                    </FormControl>
                    <Button
                        endIcon={<SendIcon />}
                        variant="contained"
                        sx={{ margin: '1rem' }}
                        type="submit"
                    >
                        Terminar la compra
                    </Button>
                </Paper>
            </Box>
        )
    ) : (
        <></>
    );
};
