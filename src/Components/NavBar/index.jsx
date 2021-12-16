import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartWidget from "./CartWidget";

const NavBar = () => {

  const {cart, cantidadTotal} = useContext(CartContext);

  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink to="/" className="nav-link">Coder store</NavLink>
            </li>
            <li class="nav-item active">
                <NavLink to={`/category/men's clothing`} className="nav-link">Men</NavLink>
            </li>
            <li class="nav-item active">
                <NavLink to="/category/women's clothing" className="nav-link" >Women</NavLink>
            </li>
          </ul>

          <div style ={{position: "absolute", right: "20px"}}> 
            <Link to = "/cart"><CartWidget/></Link>
            <div 
            style={{
              height: '22px', width: '22px', borderRadius: "10px", backgroundColor: "red",
              position: "absolute", top: "-8px", right: "-10px", textAlign: "center", alignItems: "center"
            }}>
              <span style={{
                color: 'white',
              }}>{cantidadTotal}</span>
            </div>
          </div>

        </div>
      </nav>
  )
}

export default NavBar;
