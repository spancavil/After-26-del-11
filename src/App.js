import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContextProvider from './Context/CartContext';
import Cart from './Components/Cart';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path = "/" element={<ItemListContainer/>}/>
          <Route path = "/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path = "/item/:id" element={<ItemDetailContainer/>} />
          <Route path = "/cart" element={<Cart/>} />
          <Route path = "*" element={<h2>Not found</h2>}/>
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
