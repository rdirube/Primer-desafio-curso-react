import jean from '../assets/jean.jpeg'
import tShirt from '../assets/t-shirt.jpg'  
import socks from '../assets/socks.jpeg'  
import { v4 as uuid } from 'uuid';
import Item from './Item';
import { useEffect } from 'react';

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
    ];

    useEffect(() => {
    setTimeout(()=> {
        const randomItem = items[Math.floor((Math.random()*items.length))];
        const  asynFunction =  new Promise((resolve, reject) => {
            resolve(true)
        }).then(res => {
         console.log(randomItem)
        })

        console.log(randomItem);
    },2000)
     
    })


 

    const itemsGenerator = items.map( (item) =>  <Item key = {item.id} item = {item}></Item>);

    
    return  (
      <div style={{width:'100%', height:'50vh', display:'flex', justifyContent:'space-evenly', marginTop:'5vh', flexWrap:'wrap'}}>
          {itemsGenerator}
    </div>
  )
    
}



export default ItemList;