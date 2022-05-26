import jean from '../assets/jean.jpeg'
import tShirt from '../assets/t-shirt.jpg'  
import socks from '../assets/socks.jpeg'  
import { v4 as uuid } from 'uuid';
import Item from './Item';


const ItemList = () => {
    
    const items =[

        {
            id:uuid(),
            title:'skinny jean',
            description: 'tight jeans, long height',
            price:150,
            pictureUrl: jean
        }, {
            id:uuid(),
            title:'t-shirt nomad',
            description: 'long t shirt, colorless',
            price:70,
            pictureUrl:tShirt 
        },
        {
            id:uuid(),
            title:'socks',
            description: 'white cool socks',
            price:20,
            pictureUrl:socks 
        }

    ]
 

    const itemsGenerator = items.map( item =>  <Item item = {item}></Item>)

    
    return 
  (
      <div>{itemsGenerator}</div>
  )
    
}



export default ItemList;