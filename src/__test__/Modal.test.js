import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Modal from '../components/Modal';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ProductContext } from '../context';

const modalPizza = {
    image: "",
    title: "pizza",
    price: 200
}
it('it expects component not to render', () => {
    const modalOpen = false;
    const history = createMemoryHistory();
    const { queryByText} = render(
        <ProductContext.Provider value={{modalOpen, modalPizza}}>
        <Router history={history}>
            <Modal />
        </Router>
    </ProductContext.Provider>
    );

    expect(queryByText('pizza')).toBeNull();
})

it('it expect modal to show', () => {
    // Arrange
    const modalOpen = true;
    const history = createMemoryHistory();
    
    // Act
    const  modal = render(
        <ProductContext.Provider value={{modalOpen, modalPizza}}>
        <Router history={history}>
            <Modal />
        </Router>
    </ProductContext.Provider>
    )
    // Assert
    expect(modal).toBeTruthy()
  })

it('it expects modal to have value', ()=>{
    const modalOpen = true;
    const history = createMemoryHistory();
    const closeModal = jest.fn();
    const  {getByText} = render(
        <ProductContext.Provider value={{modalOpen, modalPizza, closeModal}}>
        <Router history={history}>
            <Modal />
        </Router>
    </ProductContext.Provider>
    )
    // Assert
    expect(getByText(modalPizza.title)).toBeInTheDocument();

    fireEvent.click(getByText(/Continue Shopping/i))

    expect(closeModal).toHaveBeenCalledTimes(1)
})
