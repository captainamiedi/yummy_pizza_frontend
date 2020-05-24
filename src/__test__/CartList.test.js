import React from 'react';
import {render} from '@testing-library/react';
import CartList  from '../components/Cart/CartList';

const value = {
    cart: [
        {
            title: "pizza",
            id: 1
        },
        {
            title: "pizza",
            id: 2
        }
    ]
}
it('it expects component to accept list', () => {
    const cartList = render(
        <CartList value={value} />
    )

    expect(cartList).toBeTruthy()
})