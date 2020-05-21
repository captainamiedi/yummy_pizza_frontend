import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';

export default class Pizza extends Component {
    render() {
        const { title, image, price, in_cart, id } = this.props.pizza;
        return (
            <PizzaWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                    <div className="img-container p-5" onClick={() => value.handleDetails(id)}>
                        <Link to="/details">
                            <img src={image} alt="pizza" className="card-img-top" />
                        </Link>
                        <div className="button-div">
                        <button className="cart-btn" disabled={in_cart ? true : false} onClick={()=> {value.addToCart(id); value.openModal(id)}}> 
                            {in_cart ? (<p className="text-capitalize mb-0" disabled> {" "}in Cart</p>) : (<i className="fas fa-cart-plus" />)}
                        </button>
                        </div>
                    </div>)}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </PizzaWrapper>
        )
    }
}

Pizza.propTypes = {
    pizza: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.string,
        in_cart: PropTypes.bool
    }).isRequired
};

const PizzaWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent
    transition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247, 247, 247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 1s linear; 
    object-fit: cover;
    height: 200px
}
.img-container:hover .card-img-top{
    transform: scale(1.3);
}
.cart-btn{
    position: absolute;
    bottom: 0
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 1s linear;
    transform: translate(100%, 100%)
}
.img-container:hover .cart-btn {
    transform: translate(0, 0)
}
.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}
.button-div {
    display: flex;
    justify-content: flex-end
}
`;