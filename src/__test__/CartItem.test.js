import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import CartItem from '../components/Cart/CartItem';
afterEach(cleanup);
const items = {
    image: "",
    title: "pizza" ,
    price: "",
    total: 10,
    id: 1,
    count: 0
}

const value = {
    decrement: jest.fn(() => 'decrease'),
    increment: jest.fn(() => 'increase'),
    removeItem: jest.fn(() => 'remove')
}

it('it expects component to have props', () => {
    const {getByText} = render(
        <CartItem items={items} value={value} />
    );

    expect(getByText(items.title)).toBeInTheDocument();
})
it('it expects increment button to click', async() => {
    // const increment =  increment.fn(() => 'increase')
    const {getByText} = render(
        <CartItem items={items} value={value} />
    );
    const incrementButton = getByText("+");
    fireEvent.click(incrementButton);
    expect(value.increment).toHaveBeenCalledTimes(1)
    
})

it('it expects decrease button to click', async() => {
    // const increment =  increment.fn(() => 'increase')
    const {getByText} = render(
        <CartItem items={items} value={value} />
    );
    const incrementButton = getByText("-");
    fireEvent.click(incrementButton);
    expect(value.decrement).toHaveBeenCalledTimes(1)
    
})
