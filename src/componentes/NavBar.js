import '../estilos/navBar.css'
import React from 'react';
import logo from '../assets/logo-nice.png'



const navBar = ()=> {
    return (
      <div className='navBar'>
          <div className='left-navbar'>
          <div className='navbar-element'>
              <img className='logo' src={logo}></img>
          </div>
          <div className='navbar-element p'>
              <p>Home</p>
          </div>
          <div className='navbar-element p'>
              <p>Features</p>
          </div>
          <div className='navbar-element p'>
              <p>Pricing</p>
          </div>
          </div>
          <div className='login-register'>
           <div className='log-el'>
               <p>Log In</p>
           </div>
           <div className='log-el'>
               Register
           </div>
          </div>
      </div>  
    )
}


export default navBar;