import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

/* Component */ 
import ShowItem from './item/ShowItem'
import Product from './product/Product'

const Products = ({ products, currentItem }) => {
    return (
        <div className="Products">
            {
                products.map(product => (
                    <Route exact path="/">
                        <Product
                            productData={product}
                        />
                    </Route>
                ))
            }
            {
                (!currentItem) ?
                    <Redirect to="/" /> :
                    <Route path="/product/:id"><ShowItem /></Route> 
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
        currentItem: state.shop.currentItem
    }
}

export default connect(mapStateToProps)(Products)