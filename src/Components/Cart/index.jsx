import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {

    const {cart} = useContext (CartContext);

    return (
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Foto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
            {cart.map(producto => {
                        return <tr>
                            <td> {producto.item.image}</td>
                            <td> {producto.item.description} </td>
                            <td> {producto.cantidad} </td>
                        </tr>
            })}
            </tbody>
        </table>
    )
}

export default Cart;
