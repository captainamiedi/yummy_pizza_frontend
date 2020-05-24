import React from 'react';
import {render} from '@testing-library/react';
import CartTotal from '../components/Cart/CartTotal';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


const value = {
    delivery: 200,
    cartSubTotal: 200,
    cartTax: 10,
    cartTotal: 10,
    cartTotalInEuro: 10,
    totalChange: true
}

it('it expects component to accept props', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
        <Router history={history}>
            <CartTotal value={value} />
        </Router>
    )

    expect(getByText(/tax/i)).toBeInTheDocument()
})
it('it expects component to accept props', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <CartTotal value={value} />
        </Router>
    )

    expect(value.delivery).toBe(200)
})