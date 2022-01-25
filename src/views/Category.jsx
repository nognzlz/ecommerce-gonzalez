import React, { useState, useEffect } from 'react';
import { getProductListByCategory } from '../services/products';
import ItemListContainer from '../components/ItemListContainer';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

export const Category = () => {
    const { category } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            setData(await getProductListByCategory(category));
        };

        getData();
    }, [category]);

    return (
        <ItemListContainer>
            <ItemList items={data} />
        </ItemListContainer>
    );
};
