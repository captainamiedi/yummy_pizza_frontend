import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Empty from './Empty';
import Title from '../Title';
import CartColumn from './CartColumn';
import CartList from './CartList';
import CartTotal from './CartTotal';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Title name="Your" title="Cart" />
                                    <CartColumn />
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </>
                            )
                        } else {
                            return <Empty />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
