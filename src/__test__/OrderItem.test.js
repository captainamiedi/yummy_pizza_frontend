import React from 'react';
import {render} from '@testing-library/react';
import OrderItem from '../components/Checkout/Order/OrderItem';

const items ={
    title: "pizza",
    count: 0,
    total: 100
}

it('it expects component to receive props', () => {
    const {getByText} = render(
        <OrderItem items={items} />
    )

    expect(getByText(items.title)).toBeInTheDocument()
})

it('it expects props to render', () => {
    render(
        <OrderItem items={items} />
    )

    expect(items.title).toBe('pizza')
})