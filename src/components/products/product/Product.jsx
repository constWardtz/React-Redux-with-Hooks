import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../redux/shopping/shoppingActions'

/* Style */ 
import '../../../assets/styles/Product.css'

// const Product = (productData, {addToCart} ) => {
//     const { title, price, description, image, id } = productData.productData
const Product = ( {productData, addToCart} ) => {

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
                        <button className="active">VIEW ITEM</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Product)