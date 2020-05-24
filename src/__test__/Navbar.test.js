import React from 'react';
import {render} from '@testing-library/react';
import Navbar from '../components/Navbar'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


it('it expects component to render', () => {
    const history = createMemoryHistory()
    const {getByText} = render(
        <Router history={history}>
            <Navbar />
        </Router>
    );

    expect(getByText('Pizzas')).toBeInTheDocument()
})