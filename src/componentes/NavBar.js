import '../estilos/navBar.css'
import React from 'react';
import logo from '../assets/logo-nice.png'
import Cart from './CartWidget'
import { Link } from 'react-router-dom';


const navBar = ()=> {
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
           <Cart></Cart>
          </div>
      </div>  
    )
}


export default navBar;