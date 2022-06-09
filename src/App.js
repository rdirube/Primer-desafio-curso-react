import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/itemListContainer'
import ItemCount from './componentes/itemCount'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { ThemeContext } from '@emotion/react';
import CartContext, { CartProvider } from './componentes/CartContext';

// EL GIF ESTA DENTRO DE LA CARPETA ASSETS



function App() {
  


  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar></NavBar>  
      <Routes>   
      <Route path='/' element ={<ItemListContainer></ItemListContainer>}></Route>
      <Route path='/category/:categoryId' element= {<ItemListContainer></ItemListContainer>}></Route>
      <Route path='/item/:id' element= {<ItemDetailContainer></ItemDetailContainer>}></Route>

      </Routes>  
     {/* <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'start'}}>
     <ItemCount stock = {stock}></ItemCount>
    </div> */}
         </BrowserRouter>
         </CartProvider>
    </div>
  );
}

export default App;
