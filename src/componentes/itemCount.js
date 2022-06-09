import './../App.css';
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
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'70%', borderRadius:'50px', padding:'2vh', fontSize:'3vh', backgroundColor:'white', color:'black', height:'4.5vh'}}>
                <p onClick={()=> removeCount()} style={{cursor:'pointer'}}>-</p>
                <p>{jeanCounter}</p>
                <p onClick={()=> addCount()}  style={{cursor:'pointer'}}>+</p>
            </div>
    )
}



export default ItemCount;