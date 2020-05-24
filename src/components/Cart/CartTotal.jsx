import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

export default function CartTotal({value, cart}) {
    const { delivery, cartSubTotal, cartTax, cartTotal, clearCart, cartTotalInEuro, totalChange} = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        {cart ? (
                            <div>
                                {/* <div> */}
                                <Link to="/">
                                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                                        clear cart
                                    </button>
                                </Link>
                                {/* </div> */}
                                <div>
                                <Link to="/order">
                                    <button className="btn btn-outline-primary text-uppercase mb-3 px-3 m" type="button">
                                        Proceed to Checkout
                                    </button>
                                </Link>
                                </div>
                                </div>
                               
                        ) : null}
                        <h5>
                            <span className="text-title">subtotal: </span>
                            <strong> $ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax: </span>
                            <strong> $ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">delivery: </span>
                            <strong> $ {delivery}</strong>
                        </h5>
                        <div className="total">
                            {totalChange ? (
                                <h5>
                                    <span className="text-title">total: </span>
                                    <strong> &#x20AC; {cartTotalInEuro}</strong>
                                </h5>
                            ): (<h5>
                                <span className="text-title">total: </span>
                                <strong> $ {cartTotal}</strong>
                            </h5>)}
                            
                            <button className="mx-3" style={{outline: 'none', borderStyle: 'none'}} onClick={value.toggleTotal}>
                                {totalChange ? <i className="fas fa-dollar-sign"></i> : <i className="fas fa-euro-sign"></i> }
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CartTotal.propTypes = {
    value: PropTypes.shape({
        delivery: PropTypes.number,
        cartSubTotal: PropTypes.number,
        totalChange: PropTypes.bool,
        cartTotal: PropTypes.number,
        cartTax: PropTypes.number
    }).isRequired
}

