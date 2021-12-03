import React from 'react';
import Item from '../Item';
import './styles.scss'

const ItemList = ({items}) => {

    //console.log(products);

    return (
        <div className= "itemList">
            {items.map(product => {
                return <Item product = {product} key={product.id}/>
            })}
        </div>
    )
}

export default ItemList
