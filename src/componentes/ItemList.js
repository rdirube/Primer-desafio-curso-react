
import Item from './Item';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import '../App.css';



const ItemList = ({items}) => {
   
   
   const {id} = useParams();
   


    useEffect(() => {
    setTimeout(()=> {
        const randomItem = items[Math.floor((Math.random()*items.length))];
        const  asynFunction =  new Promise((resolve, reject) => {
            resolve(true)
        }).then(res => {
        })
    },2000)
    })


 
    const itemByCategory = id ? items.filter(item => item.categorie == id) : items;
    const itemsGenerator = itemByCategory.map( (item) =>  <Item key = {item.id} item = {item}></Item>);

    
    return  (
      <div className='item-list-container'>
          {itemsGenerator}
    </div>
  )
    
}



export default ItemList;