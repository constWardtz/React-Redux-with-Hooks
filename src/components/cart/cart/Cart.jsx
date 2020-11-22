import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux' 
import { removeItem, updateQty} from '../../../redux/shopping/shoppingActions'

/* Style */ 
import '../../../assets/styles/Cart.css'

const Cart = ({ itemData, removeItem, updateQty }) => {
    const [ qty, setQty ] = useState(itemData.qty)
    
    const handleOnChange = e => {
        const { value } = e.target
        setQty(value)
        updateQty(itemData.id, value)
    }

    return (
        <Route path="/cart">
            <div className="Cart">
                <div className="wrapper">
                    <div className="img">
                        <img src={ itemData.image } alt=""/>
                    </div>
                    <div className="txt">
                        <p>{ itemData.title }</p>
                        <div className="details">
                            <div className="description">
                                <p>{ itemData.description }</p>
                            </div>
                            <div className="flex">
                                <div className="price">
                                    <p>${ itemData.price }</p>
                                </div>
                                <div className="qty">
                                    <span>Qty:</span> &nbsp;&nbsp;<input type="number" name="qty" id="qty" value={ qty } onChange={ handleOnChange}/>
                                </div>
                          </div>
                        </div>
                        <div className="btn">
                            <button onClick={() => removeItem(itemData.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </Route>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => dispatch(removeItem(id)),
        updateQty: (id, value) => dispatch(updateQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(Cart)