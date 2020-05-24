import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Details from '../components/Details';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ProductContext } from '../context';

const detailPizza = { 
    title: "Chicago Pizza",
    image: 'https',
    price: 456,
    in_cart: false,
    id: 1
};

it('it expects component to have details of a pizza', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
        <ProductContext.Provider value={{detailPizza}}>
            <Router history={history}>
                <Details />
            </Router>
        </ProductContext.Provider>
    );

    expect(getByText(detailPizza.title)).toBeInTheDocument();
});

it('it expects add to cart button to fire', () => {
    const history = createMemoryHistory();
    const addToCart = jest.fn(() => 'added');
    const {getByText, rerender} = render(
        <ProductContext.Provider value={{detailPizza, addToCart}}>
            <Router history={history}>
                <Details />
            </Router>
        </ProductContext.Provider>
    );
    const addToCartButton = getByText('add to cart');
    fireEvent.click(addToCartButton);
    expect(addToCart).toHaveBeenCalledTimes(1)
    
    detailPizza.in_cart = true
    rerender(
        <ProductContext.Provider value={{detailPizza, addToCart}}>
        <Router history={history}>
            <Details />
        </Router>
    </ProductContext.Provider>
    );

    expect(getByText('inCart')).toBeInTheDocument();
})