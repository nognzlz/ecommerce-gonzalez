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

const Item = ({ item: { title, pictureUrl, description } }) => {
    return (
        <Box sx={{ width: 0.5, display: 'inline-block', padding: '0.5rem' }}>
            <Card variant={'outlined'}>
                <CardHeader title={title} />
                <CardMedia
                    component="img"
                    height="194"
                    image={pictureUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Ver mas</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Item;
