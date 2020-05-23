import React from 'react';
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import {render, fireEvent} from '@testing-library/react';
import Pizza from '../components/Pizza';
import { ProductContext } from '../context';
import ProductProvider from '../context';

// afterEach(cleanup);
const defaultProps = { 
    title: "Chicago Pizza",
    image: 'https',
    price: 456,
    in_cart: false,
    id: 1
};
it('it expects component to recieve props', () => {
    const history = createMemoryHistory();
    const {getByText} = render (
        <ProductProvider>
        <Router history={history}>
            <Pizza pizza = {defaultProps} />
        </Router>
        </ProductProvider>
    );
    getByText(defaultProps.title);
    
});

it('it expects component to handle details function', () => {
    const handleDetails = jest.fn;
    const history = createMemoryHistory();
    const { getByTestId} = render (
        <ProductContext.Provider value={{ handleDetails}}>
            <Router history={history}>
            <Pizza pizza={defaultProps} />
            </Router>
        </ProductContext.Provider>
    );

    const detailButton = getByTestId('details');
    fireEvent.click(detailButton);
})

it('it expects component to Add Cart function', () => {
    const addToCart = jest.fn;
    const openModal = jest.fn;
    const handleDetails = jest.fn;
    const history = createMemoryHistory();
    const {getByTestId} = render (
        <ProductContext.Provider value={{ addToCart, openModal, handleDetails}}>
            <Router history={history}>
            <Pizza pizza={defaultProps} />
            </Router>
        </ProductContext.Provider>
    );

    const cartButton = getByTestId('cart');
    fireEvent.click(cartButton);
})
