import { createContext, useState, useEffect } from "react";

export const Cart = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        console.log(item);
        setCart([...cart, item]);
    }

    useEffect(()=> {
        console.log("Se ejecuta el useEffect del context");
    }, [])

    return( 
        <Cart.Provider value = {{
            addItem,
            cart
        }}>
            {children}
        </Cart.Provider>
    )
}

export default CartProvider;