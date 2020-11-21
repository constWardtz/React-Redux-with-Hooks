import shoppingTypes from './shoppingTypes'
import { PRODUCTS } from '../products/products'

const INITIAL_STATE = {
    products: PRODUCTS,
    cart: [],
    currentItem: null
}

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shoppingTypes.ADD_TO_CART:
            const item = state.products.find(product => product.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1 } : item) : [...state.cart, {...item, qty: 1 }]
            }

        case shoppingTypes.SHOW_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        case shoppingTypes.EDIT_ITEM:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty } : item)
            }
        case shoppingTypes.REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default shoppingReducer