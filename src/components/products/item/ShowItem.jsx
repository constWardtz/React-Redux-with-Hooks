import React from 'react'
import {connect} from 'react-redux'
import { addToCart } from '../../../redux/shopping/shoppingActions'
import { Link } from 'react-router-dom'
/* Style */ 
import '../../../assets/styles/ShowItem.css'


const ShowItem = ({showItem, addToCart}) => {
    return (
        <div className="ShowItem">
            <div className="wrapper">
                <div className="img">
                    <img src={showItem.image} alt=""/>
                </div>
                <div className="txt-container">
                    <div className="title">
                        <p>{showItem.title}</p>
                    </div>
                    <div className="price">
                        <p>{showItem.price}</p>
                    </div>
                    <div className="description">
                        <p>{showItem.description}</p>
                    </div>
                    <div className="btn">
                        <button onClick={() => addToCart(showItem.id)}>ADD TO CART</button>
                        <Link to="/">
                            <button className="active">CLOSE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 

const mapStateToProps = state => {
    return {
        showItem: state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowItem)