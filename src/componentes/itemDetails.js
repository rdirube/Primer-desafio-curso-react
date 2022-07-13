
import '../App.css';
import ItemCount from './itemCount';
import cart from '../App.js'
import React from 'react';
import { ThemeContext } from '@emotion/react';
import { useContext, createContext, useE } from 'react';
import CartContext from './CartContext';
import './../App.css';


const ItemDetail = ({item}) => {
    

    const {addProduct} = useContext(CartContext)

    return(
        <div className='item-detail-container'>
        <img src={`${item.pictureUrl}`} style={{width:'55vh', height:'60vh'}}></img>
        <div className='item-detail-inner-container'>
            <h3 style={{fontSize:'5vh', textDecoration:'underline', transform:'translateY(-2vh)'}}>{item.title}</h3>
            <div style={{transform:'translateY(-4vh)'}}>
            <p>Descripción: <i>{item.description}</i></p>
            <p style={{marginTop:'2vh', textDecoration:'underline', fontSize:'3.5vh', transform:'translateY(2.5vh)'}}>$ {item.price}.00 </p>

            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', transform:'translateY(-3vh)'}}>
            <p style={{color:item.stock > 0 ? 'greenyellow' : 'red', transform:'translateY(2vh)'}}>Disponibles: {item.stock}</p>
            <ItemCount item={item}></ItemCount>
            <button className='button-9' onClick={()=> addProduct(item)}>Añadir al carrito</button>
            </div>
        </div>
       </div>   
    )
 
}



export default ItemDetail;