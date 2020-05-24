import React from 'react';
import {render} from '@testing-library/react';
import OrderColumn from '../components/Checkout/Order/OrderColumn';

it('it expects component to have props', () => {
    const {getByText} = render(
        <OrderColumn />
    );

    expect(getByText('quantity')).toBeInTheDocument();
})