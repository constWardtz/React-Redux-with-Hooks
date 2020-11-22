import React from 'react'
import { connect } from 'react-redux'
import { addToCart, showItem } from '../../../redux/shopping/shoppingActions'
import { Link } from 'react-router-dom'

/* Style */ 
import '../../../assets/styles/Product.css'

const Product = ( {productData, addToCart, showItem} ) => {

    return (
        <div className="Product"> 
            <div className="wrapper">
                <div className="img">
                    <img src={ productData.image } alt=""/>
                </div>
                <div className="txt-container">
                    <div className="title">
                        <p>{ productData.title }</p>
                    </div>
                    <div className="price">
                        <p>${ productData.price }</p>
                    </div>
                    <div className="description">
                        <p>{ productData.description }</p>
                    </div>
                    <div className="btn">
                        <button onClick={() => addToCart(productData.id)}>ADD TO CART</button>
                        <Link to={`product/${productData.id}`}>
                            <button className="active" onClick={() => showItem(productData)}>VIEW ITEM</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => dispatch(addToCart(id)),
        showItem: item => dispatch(showItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)