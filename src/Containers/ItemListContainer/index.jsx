import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../Services/getItems';
import ItemList from '../../Components/ItemList';
import './styles.scss'
import Loader from '../../Components/Loader';

const ItemListContainer = () => {
    
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
                
        (async () => {
            
            if (categoryId !== undefined){
                
                const productos = await getProductsByCategory(categoryId);
                // console.log(personajes);
                setProducts(productos)

            } else {
                
                const productos = await getProducts()
                // console.log(personajes)
                setProducts(productos)

            }
        })()

    }, [categoryId])

    return (
        <>
        {products.length !== 0 ?
        <ItemList products={products}/>
        :
        <Loader/>
        }
        </>
    )
}

export default ItemListContainer;
