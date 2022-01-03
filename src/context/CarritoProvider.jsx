import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const deleteItem = (id) => setCarrito(carrito.filter((item) => item.id !== id));

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito, deleteItem }}>
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoProvider;
