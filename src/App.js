import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemList from './components/ItemList/ItemList';
/* import Carousel from './components/Carousel/Carousel'; */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  return (
    
<div className="App">

<BrowserRouter>

      <NavBar/>
   
      <Routes>

    <Route path='/' element={<ItemsListContainer/>}/>

    <Route path='/item/:id' element={<ItemDetailContainer/>}/>

    <Route path="/categoria/:categoriaId" element={<ItemsListContainer/>}/>

    <Route path="cart" element={<Cart/>}/>

      </Routes>

</BrowserRouter>
 </div>
    
    );
  }
  
  export default App;
  