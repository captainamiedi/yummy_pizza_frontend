import React, { Component } from 'react'
import Title from '../Title'
import BillingForm from './BillingForm'

export default class Billing extends Component {
    render() {
        return (
            <div>
                <Title name="Billing" title="Account" />
                <BillingForm />
            </div>
        )
    }
}
