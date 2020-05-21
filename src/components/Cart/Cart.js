import React, { Component } from 'react';
import { ProductConsumer } from '../../context';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
