import {Link} from 'react-router-dom'
import '../App.css';


 const Item = ({item}) => {
   return (
    <Link to={`/item/${item.id}`}>
       <div className='item-container'>
           {item.title}
           <img style={{width:'80%', height: '60%'}}  src={`${item.pictureUrl}`}></img>
           <p style={{fontSize:'3.5vh', fontFamily:'roboto'}}>$ {item.price}.00</p>     
       </div>   
       </Link>
   ) 

}



export default Item; 