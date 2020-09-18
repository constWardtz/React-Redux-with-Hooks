import {BUY_GUITAR} from '../types'

const listOfGuitar = {
    guitars: {
        electricGuitar: ['Gibson','Rickenbacker'],
        acousticGuitar: ['Lazer','Fender']
    }   
}

const guitarReducer = (state = listOfGuitar, action = {}) => {
    switch (action.type) {
        case BUY_GUITAR: 
            return {
                ...state,
                listOfGuitar: {
                    ...state.listOfGuitar,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

export default guitarReducer