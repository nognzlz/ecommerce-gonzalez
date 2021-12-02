import React from 'react';

const ItemListContainer = ({ children }) => {
    return (
        <nav>
            <h3>{children}</h3>
        </nav>
    );
};

export default ItemListContainer;
