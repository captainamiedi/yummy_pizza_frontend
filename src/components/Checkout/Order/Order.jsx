import React, { Component } from 'react'
import Title from '../../Title'
import OrderColumn from './OrderColumn'
import OrderList from './OrderList'
import CartTotal from '../../Cart/CartTotal';
import {ProductConsumer} from '../../../context';
import Empty from '../../Cart/Empty';
import Payment from './Payment';

export default class Order extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value
                        if (cart.length > 0)  {
                            return (
                                <>
                                    <Title name="Your" title="Order" style/>
                                    <OrderColumn />
                                    <OrderList value = {value}/>
                                    <CartTotal value={value}/>
                                    <Payment />
                                </>
                            )
                        } else {
                            return (<Empty />)
                        }


                    }}
                </ProductConsumer>

            </section>
        )
    }
}
