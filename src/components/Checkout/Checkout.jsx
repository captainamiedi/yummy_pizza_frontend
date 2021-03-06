import React, { Component } from 'react';
import styled from 'styled-components';
import Billing from './Billing/Billing';
import Order from './Order/Order';

export default class Checkout extends Component {
    render() {
        return (
            <CheckoutWrapper className="container-fluid mt-3 pt-3">
                <div className="row">
               <div className="billing col-lg-7 col-md-6 col-sm-12 pb-4 mb-2 mx-auto border-right">
                   <Billing />
                </div> 
               <div className="order mx-auto col-lg-5 col-md-6 col-sm-12">
                    <Order />
                </div> 
                </div>
            </CheckoutWrapper>
        )
    }
}

const CheckoutWrapper = styled.div`
   .order: {
        padding-right: 30px;
   }
`;
