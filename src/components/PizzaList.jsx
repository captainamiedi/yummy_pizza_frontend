import React, { Component } from 'react';
import Title from './Title';
import Pizza from './Pizza';
import { ProductConsumer } from '../context';



export default class PizzaList extends Component {
    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Pizza" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.pizza.map(pizza => {
                                        return (
                                            <Pizza key={pizza.id} pizza={pizza} />
                                        )
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
