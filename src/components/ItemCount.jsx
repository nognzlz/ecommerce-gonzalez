import { Paper, IconButton, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '0.5rem',
    },
    text: {
        userSelect: 'none',
    },
}));

const ItemCount = ({ stock, product, onAddFn, initial }) => {
    const classes = useStyles();

    const [quantity, setQuantity] = useState(initial || 0);

    const addQuantity = (value) => {
        const result = quantity + value;
        if (result >= 0) {
            setQuantity(result);
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    bgcolor: 'neutral.main',
                    borderRadius: 1,
                    padding: '1rem',
                    marginBottom: '1rem',
                }}
            >
                <Typography variant={'body1'} className={classes.text}>
                    {product}
                </Typography>
                <Typography variant={'body1'} className={classes.text}>
                    Stock disponible: {stock}
                </Typography>

                <Paper variant="outlined" className={classes.paper}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            aria-label="remove"
                            size="small"
                            onClick={() => {
                                addQuantity(-1);
                            }}
                            disabled={quantity < 1}
                        >
                            <RemoveCircle />
                        </IconButton>
                        <Typography className={classes.text}>
                            {quantity}
                        </Typography>
                        <IconButton
                            aria-label="add"
                            size="small"
                            onClick={() => {
                                addQuantity(1);
                            }}
                            disabled={quantity >= stock}
                        >
                            <AddCircle />
                        </IconButton>
                    </Box>
                </Paper>
            </Box>
            <Button
                sx={{
                    width: '100%',
                }}
                variant="outlined"
                color="secondary"
                disabled={quantity < 1 || quantity > stock}
                onClick={() => {
                    onAddFn({ ...product, quantity });
                }}
            >
                Agregar al carrito
            </Button>
        </Box>
    );
};

export default ItemCount;
