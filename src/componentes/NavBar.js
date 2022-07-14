import '../estilos/NavBar.css'
import React, { useState, useContext, useEffect } from 'react';
import logo from '../assets/logo-nice.png'
import Cart from './CartWidget'
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const NavBar = () => {


    const [showCart, cartStateModify] = useState(false);
    const { totalQuantity, setQuantity } = useContext(CartContext);
    const linkProperties = [{cat:"/category/1", name: 'Pantalones'}, { cat:"/category/2",name:'Remeras'},{
                           cat:"/category/3", name:'Medias'},{cat:"/Cart", name:"Carrito"}]
    const logInRegister = ['Log In', 'Register'];


    const navBar = linkProperties.map(prop => {
        return(
            <div className='navbar-element p'>
            <Link to={prop.cat} style={{ textDecoration: 'none' }}> {prop.name}</Link>
        </div>  
    )
    }) 

    const logInReg = logInRegister.map(prop => {
        return (
            <div className='log-el'>
            {prop}
           </div>
        )
    })

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
                {navBar}
            </div>
            <div className='login-register'>
                {logInReg}
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