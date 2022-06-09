import '../estilos/navBar.css'
import React, {useState} from 'react';
import logo from '../assets/logo-nice.png'
import Cart from './CartWidget'
import { Link } from 'react-router-dom';


const NavBar = ()=> {

   const [showCart, cartStateModify] = useState(false) ;
   
   function showCartToggle() {
       cartStateModify(!showCart)
   }

    return (
      <div className='navBar'>
          <div className='left-navbar'>
          <div className='navbar-element'>             
              <Link to="/"><img className='logo' src={logo}></img></Link>
          </div>
          <div className='navbar-element p'>
             <Link to="/category/1"> Pantalones</Link>
          </div>
          <div className='navbar-element p'>
             <Link to="/category/2"> Remeras</Link>
          </div>
          <div className='navbar-element p'>
              <Link to="/category/3"> Medias</Link>
          </div>
          </div>
          <div className='login-register'>
           <div className='log-el'>
               <p>Log In</p>
           </div>
           <div className='log-el'>
               Register
           </div>
      {showCart && (<Cart></Cart>)}   
          </div>
          <div onClick={()=> showCartToggle()} className='cart-widget'>
        <i class="material-icons" >add_shopping_cart
         </i>
        </div>
      </div>  
    )
}


export default NavBar;