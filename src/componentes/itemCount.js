import './../App.css';
import React , {useState} from 'react';


const ItemCount = () => {
    //intente utlizar un classname pero me figuran las propiedades tachadas en la consola del servidor.
   //Perdon se que queda horrible asi


   const [jeanCounter, counterState] = useState(1) 

   const stock = 5;

   function onAdd(isPlus) {
       const valueOfOp = isPlus ? 1 : -1;
       const operationCondition = (isPlus && jeanCounter < stock) || (!isPlus && jeanCounter > 0);
       if(operationCondition) {
        counterState(jeanCounter + valueOfOp)
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
                <p onClick={()=> onAdd(false)} style={{cursor:'pointer', fontSize:'18px'}}>-</p>
                <p>{jeanCounter}</p>
                <p onClick={()=> onAdd(true)}  style={{cursor:'pointer', fontSize:'18px'}}>+</p>
            </div>
        </div>
    )
}



export default ItemCount;