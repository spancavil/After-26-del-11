import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContextProvider from './Context/CartContext';
import { UserContextProvider } from './Context/UserContext';
import RestrictedRoute from './Components/RestrictedRoute';
import Secreto from './Components/Secreto';

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path = "/" element={<ItemListContainer/>}/>
            <Route path = "/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path = "/item/:id" element={<ItemDetailContainer/>} />
            <Route path = "/rutaSecreta" element ={<RestrictedRoute>
                                                <Secreto/>
                                              </RestrictedRoute>}/>
            <Route path = "*" element={<h2>Not found</h2>}/>
          </Routes>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
