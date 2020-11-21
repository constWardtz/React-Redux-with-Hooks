import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Style */ 
import '../../assets/styles/Navbar.css'

const Navbar = ({ cart }) => {
    const [ cartCount, setCartCount ] = useState(0)
    
    useEffect(() => {
        let count = 0
        cart.forEach(item => {
            count += item.qty
        })
        setCartCount(count)
    }, [cart, cartCount])
    return (
        <div className="Navbar">
            <div className="logo-container">
                <a href="#">Shopping Cart!</a>
            </div>
            <div className="cart-container">
                <Link to="/cart">
                    <button>CART { cartCount }</button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar)