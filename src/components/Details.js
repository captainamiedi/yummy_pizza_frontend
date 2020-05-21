import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {image, price, title, description, variations, trad_toppings, id, in_cart} = value.detailPizza
                    return (
                        <>
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                <div className="row" style={{paddingTop: '2rem'}}>
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={image} className="img-fluid" alt="pizza"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>Name: {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Description: {' '}
                                            <span className="text-uppercase">{description}</span>
                                        </h4>
                                        <h4 className="text-blue"> <strong>price: <span>$</span>{price}</strong></h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Variations: {variations ? variations : "No variation"}
                                        </p>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Traditional Toppings: {trad_toppings}
                                        </p>
                                        <p className="text-muted lead"></p>    
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>
                                                    back to product
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer 
                                                cart
                                                 disabled={in_cart ? true : false}
                                                 onClick={()=>{value.addToCart(id)}}
                                            >
                                                {in_cart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                            
                                        </div>                             
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }}
            </ProductConsumer>
        )
    }
}
