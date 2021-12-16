import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState (0)

    const addItem = (producto, quantity) => {

        const flag = isInCart(producto);
        console.log(flag);
        if (flag) {
            let productoRepetido = cart.find (elemento => elemento.item === producto);
            productoRepetido.cantidad += quantity;
            let cartSinRepetido = cart.filter (elemento => elemento.item !== producto);
            setCart([...cartSinRepetido, productoRepetido]);
        } else {
            setCart([...cart, {item: producto, cantidad: quantity}]);
        }
        sumarCantidades();
    }

    const isInCart = (item) => {
        console.log(item);
        return cart.some(producto => producto.item === item );
    }

    const removeItem = (item) => {

    }

    const cleanCart = () => {

    }

    const sumarCantidades = () => {
        let subTotal = 0;
        cart.forEach(elemento=> {
            subTotal += elemento.cantidad
        })
        setCantidadTotal(subTotal)
    }

    return(
        <CartContext.Provider value = {{
            cart, cantidadTotal,
            addItem, removeItem, cleanCart, 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;