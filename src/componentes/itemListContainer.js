import '../estilos/navBar.css';
import ItemList from './ItemList';
import { useContext, createContext } from 'react';
import CartContext from './CartContext';


const ItemListContainer = () => {
    

    const {items} = useContext(CartContext)


    




    return (
        <div className='App-header'>
         <ItemList items = {items}></ItemList>
        </div>
    )
}


export default ItemListContainer;