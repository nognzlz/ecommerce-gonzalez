import { Cart } from '../components/Cart';
import { CheckoutForm } from '../components/CheckoutForm';

import React, { useState } from 'react';
export const Checkout = () => {
    const [showCart, setShowCart] = useState(true);

    return (
        <>
            {showCart && <Cart />}
            <CheckoutForm setShowCart={setShowCart} />
        </>
    );
};
