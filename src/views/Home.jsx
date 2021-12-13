import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import ItemList from '../components/ItemList';
import products from '../services/products';

export const Home = () => {
    const [data, setData] = useState();

    const getData = async () => {
        setData(await products);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ItemListContainer>
            <ItemList items={data} />
        </ItemListContainer>
    );
};
