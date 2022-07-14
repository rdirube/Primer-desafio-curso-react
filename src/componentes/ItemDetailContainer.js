import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useContext, createContext } from 'react';
import CartContext from './CartContext';
import ItemDetail from './ItemDetails';
import '../App.css';

const ItemDetailContainer = () => {
    
  


    const { id } = useParams();

    const { items } = useContext(CartContext)
    
    const item = items.find(item => item.id === id)

    useEffect(()=> {
        console.log(item)
    }, [])


    return (<div className='App-header'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'translateY(7vh)', padding: '3vh' }}>
          {item && <ItemDetail item = {item}></ItemDetail> }  
        </div>
    </div>
    )


}


export default ItemDetailContainer;