import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
import ItemCount from './componentes/ItemCount'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { ThemeContext } from '@emotion/react';
import CartContext, { CartProvider } from './componentes/CartContext';
import CompleteCart from './componentes/Cart';


// EL GIF ESTA DENTRO DE LA CARPETA ASSETS



function App() {

 


  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar></NavBar>  
      <Routes>   
      <Route path='/' element ={<ItemListContainer></ItemListContainer>}></Route>
      <Route path='/category/:id' element= {<ItemListContainer></ItemListContainer>}></Route>
      <Route path='/item/:id' element= {<ItemDetailContainer></ItemDetailContainer>}></Route>
      <Route path='/cart' element= {<CompleteCart></CompleteCart>}></Route>
      </Routes>  
      </BrowserRouter>
       </CartProvider>
    </div>
  );
}

export default App;
