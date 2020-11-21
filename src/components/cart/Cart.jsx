import React from 'react'
import { Route } from 'react-router-dom'

import '../../assets/styles/Cart.css'

const Cart = () => {
    return (
        <Route path="/cart">
            <div className="Cart">
                <h1>CART</h1>
                <div className="wrapper">
                    <div className="img">
                        <img src={require('../../assets/pictures/phonepouch_01.jpg')} alt=""/>
                    </div>
                    <div className="txt">
                        <div className="title">
                            <p>Product One</p>
                        </div>                        
                        <div className="price">
                            <p>$40</p>
                        </div>
                        <div className="btn">
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Cart