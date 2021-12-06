import Container from '../UI/Container';
import React from 'react';
import ItemListContainer from './ItemListContainer';
import ItemCount from './ItemCount';

export const Main = () => {
    const onAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos a tu carrito`);
    };

    return (
        <Container>
            <ItemListContainer>
                <ItemCount
                    stock={3}
                    product={'Miel orgánica'}
                    onAddFn={onAdd}
                    initial={1}
                />
            </ItemListContainer>
        </Container>
    );
};

export default Main;
