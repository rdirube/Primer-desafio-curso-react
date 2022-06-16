import '../estilos/navBar.css';
import ItemDetail from './itemDetails';
import Items from '../items';
import { useParams } from 'react-router-dom';
import '../App.css';
import db from '../utils/firebaseConfig'
import { async } from '@firebase/util';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

const ItemDetailContainer = ({item}) => {

    const {id} = useParams();
    const items = Items;
    
    const getProducts = async () => {
     const querySnapshot = await getDocs(collection(db, "items"));

      const itemList = querySnapshot.docs.map((doc) => {
        console.log(doc.data())
      })
    }

    useEffect(() => {
        getProducts();

    }, [db])


    return (<div className='App-header'>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', transform:'translateY(7vh)',  padding:'3vh'}}>
             <ItemDetail item = {items[id-1]}></ItemDetail>
            </div>
            </div>
           )


}


export default ItemDetailContainer;