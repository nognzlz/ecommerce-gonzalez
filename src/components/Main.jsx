import Container from '../UI/Container';
import React, { useState, useEffect } from 'react';
import ItemListContainer from './ItemListContainer';
import ItemList from './ItemList';
import products from '../services/products';

export const Main = () => {
    const [data, setData] = useState();

    const getData = async () => {
        setData(await products);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <ItemListContainer>
                <ItemList items={data} />
            </ItemListContainer>
        </Container>
    );
};

export default Main;
