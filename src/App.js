import React from 'react'
import { Switch } from 'react-router-dom'
/* Style */ 
import './assets/styles/App.css'

/* Component */ 
import Products from './components/products/Products'
import Navbar from './components/navbar/Navbar'
import Cart from './components/cart/Cart'


const App = () => {
    return (
        <Switch>
            <div className="App">
                <Navbar/>
                <Products />
                <Cart/>
            </div>
        </Switch>
    )
}

export default App