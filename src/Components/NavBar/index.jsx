import { useContext } from "react";
import { NavLink} from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
import ModalLogin from "../ModalLogin";
import ModalSignup from "../ModalSIgnup";
import CartWidget from "./CartWidget";

const NavBar = () => {

  const {cart,} = useContext(CartContext);
  const {logged, logout, user} = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">Coder store</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink to={`/category/men's clothing`} className="nav-link">Men</NavLink>
            </li>
            <li className ="nav-item active">
                <NavLink to="/category/women's clothing" className="nav-link" >Women</NavLink>
            </li>
            <li className ="nav-item active">
                <NavLink to="/rutaSecreta" className="nav-link" >Secret</NavLink>
            </li>
          </ul>
          <div> 
        <div style={{
          position: "absolute",
          right: "10px",
          top: "7px",
        }}
        >
          <CartWidget/>
          <span style={{
          color: 'gray',
          margin: '0 20px 0 5px',
          }}>{cart.length}</span>
          {
          logged 
          ?

          <>
            <span style={{color: "gray"}}>Welcome {user.email}</span>
            <button className="btn btn-primary mx-3" onClick={logout}>Logout</button>
          </>

          :

          <>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalSignup">
              Signup
            </button>
            <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#modalLogin">
              Login
            </button>
          </>
          }
        </div>
        
        </div>

        </div>
      </nav>
      <ModalSignup/>
      <ModalLogin/>
    </>
  )
}

export default NavBar;
