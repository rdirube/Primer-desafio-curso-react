import '../estilos/navBar.css';
import {useParams} from 'react-router-dom'
import '../App.css';
import { useEffect, useState } from 'react';
import { useContext, createContext } from 'react';
import CartContext from './CartContext';
import ItemDetail from './itemDetails';


const ItemDetailContainer = () => {
    
    console.log(useParams())


    const { id } = useParams();

    const { items } = useContext(CartContext)



    return (<div className='App-header'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'translateY(7vh)', padding: '3vh' }}>
            <ItemDetail item = {items[id-1]}></ItemDetail> 
        </div>
    </div>
    )


}


export default ItemDetailContainer;