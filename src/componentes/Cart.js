import CartContext from './CartContext';
import { useContext } from 'react';
import './../App.css';
import 'react-materialize/lib/Icon';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';




const CompleteCart = ({}) =>  {

    const { cartListItems } = useContext(CartContext)
    const { removeItem } = useContext(CartContext)
    const { totalPrice } = useContext(CartContext)

   
   

   render(); 
   { 
    
    return (
           cartListItems.length > 0 ? (
        <div style={{width:'100%', height:'100%'}}>
            <div className='cart-line'>
                <span className='header-opt'>Producto</span>
                <span className='header-opt'> Cantidad</span>
                <span className='header-opt'> Precio</span>
                <span className='header-opt'> Por producto</span>
                <span className='header-opt'> Eliminar</span>
            </div>
            {cartListItems.map((item,i) => {
                return (
                    <div className='cart-line' key={item.id}>
                       <span className='header-opt'>{item.title}</span>
                       <span className='header-opt'> {item.quantity}</span>
                       <span className='header-opt'> $ {item.price}.00</span>
                       <span className='header-opt'>$ {item.quantity * item.price}.00</span>
                       <span className='header-opt' style={{cursor:'pointer'}} onClick={() => removeItem(i)}> <i class="material-icons">delete</i></span>
                    </div>
                )
            })}
            <div className='cart-line'>
                <span className='header-opt'>Total</span>
                <span className='header-opt'> </span>
                <span className='header-opt'> </span>
                <span className='header-opt'>$ {totalPrice}.00</span>
                <span className='header-opt'> </span>
            </div>
        </div>
    ) :  (
    <div style={{height:'60vh', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <p style={{fontSize:'4vh'}}>No hay productos en tu carrito</p>
     <Link to="/"><button class="button-28" role="button">Volver al home</button></Link> 

    </div>) 
    )
    }




}

export default CompleteCart;