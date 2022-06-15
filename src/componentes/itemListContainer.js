import '../estilos/navBar.css';
import ItemList from './ItemList';
import Items from '../items';

const ItemListContainer = () => {
    

    const items = Items;
    

    return (
        <div className='App-header'>
         <ItemList items = {items}></ItemList>
        </div>
    )
}


export default ItemListContainer;