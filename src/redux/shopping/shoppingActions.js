import shoppingTypes from './shoppingTypes'

export const addToCart = itemID => {
    return {
        type: shoppingTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const showItem = itemID => {
    return {
        type: shoppingTypes.SHOW_ITEM,
        payload: itemID
    }
}

export const updateQty = (itemID, value) => {
    return {
        type: shoppingTypes.EDIT_ITEM,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const removeItem = itemID => {
    return {
        type: shoppingTypes.REMOVE_ITEM,
        payload: {
            id: itemID
        }
    }
}