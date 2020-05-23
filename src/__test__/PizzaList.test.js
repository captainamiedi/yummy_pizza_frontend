import React from 'react';
import PizzaList from '../components/PizzaList';
import {render, cleanup} from '@testing-library/react';
import ProductProvider from '../context';

afterEach(cleanup);

it('context value update pizzalist component', () => {
    const pizzaList = render(
        <ProductProvider>
            <PizzaList />
        </ProductProvider>
    )

    expect(pizzaList).toBeTruthy();
})