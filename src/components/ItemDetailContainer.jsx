import React, { useState, useEffect } from 'react';
import Container from '../UI/Container';
import ItemDetail from './ItemDetail';
import { getProductById } from '../services/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            setData(await getProductById(id));
        };
        getData();
    }, [id]);

    return <Container>{data ? <ItemDetail item={data} /> : 'Cargando...'}</Container>;
};

export default ItemDetailContainer;
