import React from 'react'
import { ButtonContainer } from '../../Button'

export default function Payment() {
    return (
        <div className="text-center mt-4">
            <div className="alert alert-secondary" role="alert">
                We accept all types of cards
            </div>
            <ButtonContainer>Place Order</ButtonContainer>
        </div>
    )
}
