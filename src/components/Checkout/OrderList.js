import React from 'react'
import OrderItem from './OrderItem';

export default function OrderList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <OrderItem items={item} key={item.id} />
            })}
        </div>
    )
}
