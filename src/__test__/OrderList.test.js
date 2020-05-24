import React from 'react';
import {render} from '@testing-library/react';
import OrderList  from '../components/Checkout/Order/OrderList';

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
        <OrderList value={value} />
    )

    expect(cartList).toBeTruthy()
});

it('Total length of list to be correct', () => {
    const {getByTestId} = render(
        <OrderList value={value} />
    );
    const listUl = getByTestId('order-list');
    expect(listUl.children.length).toBe(2);
})