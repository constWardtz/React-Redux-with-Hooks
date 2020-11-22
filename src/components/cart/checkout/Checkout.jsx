import React, { useState,  useEffect } from 'react'
import { connect } from 'react-redux'

import '../../../assets/styles/Checkout.css'

const Checkout = ({ cart }) => {
    const [ totalPrice, setTotalPrice ] = useState(0)
    const [ totalItems, setTotalItems ] = useState(0)

    useEffect(() => {
        let price = 0
        let items = 0

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })

        setTotalPrice(price)
        setTotalItems(items)
    }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])

    return (
        <div className="Checkout">
            <div className="wrapper">
                <div className="txt">
                    <p>Your Item</p>
                    <p>{ totalItems } items</p>
                    <p>Total: ${ totalPrice }</p>
                </div>
                <div className="btn">
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Checkout)