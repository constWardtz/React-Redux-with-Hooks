import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

/* Components */ 
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'

/* Style */ 
import '../../assets/styles/CartItems.css'


const CartItems = ({cart}) => {
    return (
        <div className="CartItems">
            <Route path="/cart">
                <Checkout />
            </Route>
            {cart.map(item => (
                <Cart key={item.id} itemData={item}/>
            ))}
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(CartItems)