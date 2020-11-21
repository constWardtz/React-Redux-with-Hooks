import React from 'react'
import { connect } from 'react-redux'
import Product from './product/Product'
import { Route } from 'react-router-dom'

const Products = ({ products }) => {
    return (
        <div className="Products">
            {
                products.map(product => (
                    <Route exact path="/">
                        <Product
                            key = {product.id}
                            productData = {product}
                        />
                    </Route>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products)