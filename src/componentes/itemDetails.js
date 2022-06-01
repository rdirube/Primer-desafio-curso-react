
import '../App.css';
import ItemCount from './itemCount';




const ItemDetail = ({item}) => {
    return(
        <div style={{display:'flex', padding:'4vh',  backgroundColor:'transparent',borderRadius:'10px', border:'1px solid white'}}>
        <img src={item.pictureUrl} style={{width:'55vh', height:'60vh'}}></img>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', width:'40%',border:0 , color:'white', alignItems:'center', paddingLeft:'3vh'}}>
            <h3 style={{fontSize:'5vh', textDecoration:'underline'}}>{item.title}</h3>
            <div>
            <p>Descripción: <i>{item.description}</i></p>
            </div>
            <p>{item.price}.00 $</p>
            <p style={{color:'greenyellow'}}>Disponibles: {item.stock}</p>
            <ItemCount stock={item.stock}></ItemCount>
            <button className='button-9'>Añadir al carrito</button>
        </div>
       </div>
    )
 
}



export default ItemDetail;