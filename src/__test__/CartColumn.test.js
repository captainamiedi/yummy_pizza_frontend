import React from 'react';
import {render} from '@testing-library/react';
import CartColumn from '../components/Cart/CartColumn';

it('it expects component to have props', () => {
    const {getByText} = render(
        <CartColumn />
    );

    expect(getByText('price')).toBeInTheDocument();
})