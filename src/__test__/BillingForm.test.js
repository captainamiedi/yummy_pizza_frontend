import React from 'react';
import {render} from '@testing-library/react';
import BillingForm from '../components/Checkout/Billing/BillingForm';

it('it expects component to have props', () => {
    const {getByText} = render(
        <BillingForm  />
    );

    expect(getByText('First Name')).toBeInTheDocument();
})