import React from 'react'
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem items={item} key={item.id} value ={value} />
            })}
        </div>
    )
}
