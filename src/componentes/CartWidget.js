import 'react-materialize/lib/Icon';
import './../App.css';

const Cart = ()=> {
    return (
        <div className='cart-widget'>
        <i class="material-icons" >add_shopping_cart
         </i>
         <p style={{fontSize:'15px', transform:'translateY(5px)'}}>0</p>
        </div>
    )
}


export default Cart;