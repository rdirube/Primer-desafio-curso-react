
import ItemCount from './ItemCount';
import React from 'react';
import { useContext} from 'react';
import CartContext from './CartContext';
import '../estilos/ItemDetails.css'
   

const ItemDetail = ({item}) => {
    

    const {addProduct} = useContext(CartContext)

    return(
        <div className='item-detail-container'>
        <img src={`${item.pictureUrl}`} style={{width:'55vh', height:'60vh'}}></img>
        <div className='item-detail-inner-container'>
            <h3 className='item-title'>{item.title}</h3>
            <div style={{transform:'translateY(-4vh)'}}>
            <p>Descripción: <i>{item.description}</i></p>
            <p className='item-price'>$ {item.price}.00 </p>
            </div>
            <div className='item-buy-container'>
            <p style={{color:item.stock > 0 ? 'greenyellow' : 'red', transform:'translateY(2vh)'}}>Disponibles: {item.stock}</p>
            <ItemCount item={item}></ItemCount>
            <button className='button-9' onClick={()=> addProduct(item)}>Añadir al carrito</button>
            </div>
        </div>
       </div>   
    )
 
}



export default ItemDetail;