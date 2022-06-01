import '../estilos/navBar.css';
import ItemDetail from './itemDetails';
import Items from '../items';
import { useParams } from 'react-router-dom';
import '../App.css';


const ItemDetailContainer = ({item}) => {

    const {id} = useParams();
    const items = Items;


    return (<div className='App-header'>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', transform:'translateY(7vh)',  padding:'3vh'}}>
             <ItemDetail item = {items[id-1]}></ItemDetail>
            </div>
            </div>
           )


}


export default ItemDetailContainer;