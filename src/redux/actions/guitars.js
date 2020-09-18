import {BUY_GUITAR} from '../types'

export function buyGuitar(payload) {
    return {
        type: BUY_GUITAR,
        payload
    }
}