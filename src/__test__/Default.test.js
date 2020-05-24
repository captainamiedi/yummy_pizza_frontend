import React from 'react';
import {render} from '@testing-library/react';
import Default from '../components/Default';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

it('it expects component to have element', () => {
    const history = createMemoryHistory()
    const location = { pathname: '/dashboard/' };
    const {queryByText} = render(
        <Router history={history}>
            <Default location={location} />
        </Router>
    )

    expect(queryByText('page not found')).toBeInTheDocument()
})