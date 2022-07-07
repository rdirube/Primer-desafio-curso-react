import { useContext } from 'react';
import 'react-materialize/lib/Icon';
import './../App.css';
import CartContext from './CartContext';


const Cart = () => {
    const { cartListItems } = useContext(CartContext)
    const { removeItem } = useContext(CartContext)

    return (

        <div className="cart-father-cont">
            {cartListItems.map((item,i) => {
                return (
                    <div className="cart-list-container" key={item.id}>
                        <div style={{display:'flex'}}>
                            <img src={`${item.pictureUrl}`} alt="producto" style={{ width: '10vh', height: '11vh' }}></img>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'start',transform:'translateX(2vh)'}}>
                                <span>{item.title} X{item.quantity}</span>
                                <span style={{fontWeight:'300'}}>$ {item.price}.00 </span>
                                </div>
                           </div>
                         <div style={{display:'flex', alignItems:'center'}}>
                            <p style={{color:'red', cursor:'pointer'}} onClick={()=> removeItem(i)}>Eliminar</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Cart;