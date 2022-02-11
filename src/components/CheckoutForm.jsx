import { Box, Typography, FormControl, InputLabel, Input, Paper, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { CarritoContext } from '../context/CarritoProvider';
import { sendOrder } from '../services/order';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';

import React, { useState, useContext, useEffect } from 'react';

export const CheckoutForm = ({ setShowCart }) => {
    const { carrito, clearCart } = useContext(CarritoContext);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [orderId, setOrderId] = useState();

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
            setOrderId(result.id);
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
            <Paper sx={{ margin: '1rem 0', padding: '1rem', width: 1 }}>
                <Typography variant="h5"> Procesando tu orden ...</Typography>
            </Paper>
        ) : success ? (
            <Paper sx={{ margin: '1rem 0', padding: '1rem', width: 1, bgcolor: 'success.main' }}>
                <Typography mb={2} variant="h5" color={grey[50]}>
                    Tu orden fue cargada exitosamente!
                </Typography>
                <Typography mb={2} variant="body1" color={grey[50]}>
                    Tu código de compra es: {orderId}
                </Typography>
                <Button variant="outlined" component={Link} to="/">
                    Ir al inicio
                </Button>
            </Paper>
        ) : error ? (
            <Paper sx={{ margin: '1rem 0', padding: '1rem', width: 1, bgcolor: 'error.main' }}>
                <Typography variant="h5"> Lo sentimos, no pudimos procesar tu orden</Typography>
                <Button component={Link} to="/">
                    Ir al inicio
                </Button>
            </Paper>
        ) : (
            <Box mt={3} component="form" onSubmit={handleSubmit}>
                <Typography variant="h3">Datos del recipiente</Typography>
                <Paper sx={{ my: 3, padding: '1rem' }}>
                    <FormControl fullWidth sx={{ my: 2 }}>
                        <InputLabel htmlFor="name">Nombre Completo</InputLabel>
                        <Input id="name" name="name" onChange={handleChange} required />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 2 }}>
                        <InputLabel htmlFor="phone">Telefono</InputLabel>
                        <Input
                            id="phone"
                            name="phone"
                            type="phone"
                            onChange={handleChange}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 2 }}>
                        <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            required
                        />
                    </FormControl>
                    <Typography sx={{ my: 2 }} variant="body1">
                        Total: ${form.total}
                    </Typography>
                    <Button endIcon={<SendIcon />} variant="contained" sx={{ mb: 3 }} type="submit">
                        Terminar la compra
                    </Button>
                </Paper>
            </Box>
        )
    ) : (
        <></>
    );
};
