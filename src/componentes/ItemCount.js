import '../estilos/Item.css'
import React , {useState} from 'react';


const ItemCount = ({item}) => {
    //intente utlizar un classname pero me figuran las propiedades tachadas en la consola del servidor.
   //Perdon se que queda horrible asi
   
   const count = 1;

   const [jeanCounter, setCount] = useState(count) 

   

   const addCount = () => {
    if(jeanCounter < item.stock) {
        setCount(jeanCounter + 1);
        item.quantity++
    }
}
    const removeCount = () => {
    if(jeanCounter > 1) {
        setCount(jeanCounter - 1);
        item.quantity--
    }
}


    return(
            <div className='counter-container'>
                <p onClick={()=> removeCount()} style={{cursor:'pointer'}}>-</p>
                <p>{jeanCounter}</p>
                <p onClick={()=> addCount()}  style={{cursor:'pointer'}}>+</p>
            </div>
    )
}



export default ItemCount;