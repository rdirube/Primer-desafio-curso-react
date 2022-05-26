import './../App.css';
import React , {useState} from 'react';


const ItemCount = ({stock}) => {
    //intente utlizar un classname pero me figuran las propiedades tachadas en la consola del servidor.
   //Perdon se que queda horrible asi
   
   const count = 1;

   const [jeanCounter, setCount] = useState(count) 

   

   const addCount = () => {
    if(jeanCounter < stock) {
        setCount(jeanCounter + 1)
    }
}
    const removeCount = () => {
    if(jeanCounter > 1) {
        setCount(jeanCounter - 1)
    }
}


    return(
        <div style={{display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white',
        position:'absolute',
        zIndex: 50,
        padding:'1vh 2.5vh',
        borderRadius:'20px',
        transform:'translateY(20px)',
        border:'1px solid black'
        }}>
            <p>Jean Skinny Fit</p>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
                <p onClick={()=> removeCount()} style={{cursor:'pointer', fontSize:'18px'}}>-</p>
                <p>{jeanCounter}</p>
                <p onClick={()=> addCount()}  style={{cursor:'pointer', fontSize:'18px'}}>+</p>
            </div>
        </div>
    )
}



export default ItemCount;