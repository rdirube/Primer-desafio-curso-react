import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/itemListContainer'
import ItemCount from './componentes/itemCount'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'start'}}>
     <ItemCount></ItemCount>
    </div>
     <div>
     <ItemListContainer></ItemListContainer>
     </div>
    </div>
  );
}

export default App;
