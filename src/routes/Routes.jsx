import React from 'react';
import { Home, Details, Error, Category } from '../views';
import { Routes as DOMRoutes, Route } from 'react-router-dom';

export const Routes = () => {
    return (
        <DOMRoutes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detalle/:id" element={<Details />} />
            <Route exact path="/category/:category" element={<Category />} />
            <Route exact path="*" element={<Error />} />
        </DOMRoutes>
    );
};
