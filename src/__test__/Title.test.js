import React from 'react';
import {render} from '@testing-library/react';
import Title from '../components/Title';

it('it expects component to have props', () => {
    const {getByText} = render(
        <Title title="account" />
    );

    expect(getByText('account')).toBeInTheDocument();
})