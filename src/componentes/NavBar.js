import '../estilos/navBar.css'
import React, { useState, useContext, useEffect } from 'react';
import logo from '../assets/logo-nice.png'
import Cart from './CartWidget'
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const NavBar = () => {


    const [showCart, cartStateModify] = useState(false);
    const { totalQuantity } = useContext(CartContext);
    const { setQuantity } = useContext(CartContext);

    function showCartToggle() {
        cartStateModify(!showCart)
    }
    const { cartListItems } = useContext(CartContext)


    useEffect(() => {
        if (cartListItems.length === 0) {
            cartStateModify(false)
        }
        setQuantity(cartListItems.length)

    }, [cartListItems])


    return (
        <div className='navBar'>
            <div className='left-navbar'>
                <div className='navbar-element'>
                    <Link to="/"><img className='logo' src={logo}></img></Link>
                </div>
                <div className='navbar-element p'>
                    <Link to="/category/1" style={{ textDecoration: 'none' }}> Pantalones</Link>
                </div>
                <div className='navbar-element p'>

                    <Link to="/category/2" style={{ textDecoration: 'none' }}>Remeras </Link>
                </div>
                <div className='navbar-element p'>

                    <Link to="/category/3" style={{ textDecoration: 'none' }}> Medias</Link>
                </div>
                <div className='navbar-element p'>

                    <Link to="/Cart" style={{ textDecoration: 'none' }}>Carrito </Link>
                </div>
            </div>
            <div className='login-register'>
                <div className='log-el'>
                    <p>Log In</p>
                </div>
                <div className='log-el'>
                    Register
                </div>
                {showCart && (
              
                    <Cart>
                    </Cart>
                )}
            </div>
            <div onClick={() => showCartToggle()} className='cart-widget'>
                <i className="material-icons" >add_shopping_cart
                </i>
                <span style={{transform:'translateY(1.8vh)', fontSize:'2.2vh'}}>{totalQuantity}</span>
            </div>
        </div>
    )
}


export default NavBar;