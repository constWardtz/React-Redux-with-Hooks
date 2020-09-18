import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { buyGuitar } from './redux/actions/guitars'

const App = () => {
    const guitars = useSelector(state => state.guitarReducer.guitars)

    const dispatch = useDispatch()

    const handleOnClick = (type) => {
        if (type === 'acoustic') {
            dispatch(buyGuitar({acousticGuitar: "Lakewood"}))
        } else if (type === 'electric') {
            dispatch(buyGuitar({electricGuitar: "Jackson"}))
        } else {
            dispatch(buyGuitar({Guitar: null}))
        }

        console.log("Guitars: ", guitars)
    }

    return (
        <fieldset>
            <span>List of Acoustic Guitars: {guitars.acousticGuitar.length}</span> <br />
             <span>List of Electric Guitars: {guitars.electricGuitar.length}</span> <br /><br />
            <button onClick={() => handleOnClick('acoustic')}>Acoustic</button>
            <button onClick={() => handleOnClick('electric')}>Electric</button>
        </fieldset>
    )
}

export default App