import {
    Box,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item: { id, title, pictureUrl, description } }) => {
    return (
        <Box sx={{ width: { md: 0.5, xs: 1 }, display: 'inline-block', padding: '0.5rem' }}>
            <Card variant={'outlined'}>
                <CardHeader title={title} />
                <CardMedia component="img" height="194" image={pictureUrl} alt={title} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="medium"
                        component={Link}
                        to={`/detalle/${id}`}
                    >
                        Ver mas
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Item;
