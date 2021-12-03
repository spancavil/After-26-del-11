import React from 'react'
// import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
// import { getProduct } from '../../Services/getItems';
import ItemDetail from '../../Components/ItemDetail';
import Loader from '../../Components/Loader';
import { getItemRedux } from '../../Redux/Actions/productActions';
import { connect } from 'react-redux';

const ItemDetailContainer = ({dispatch, items, loading, hasErrors}) => {

    const {id} = useParams();
    // const [product, setProduct] = useState({})

    useEffect( ()=> {
        
        dispatch( getItemRedux(id) )

    }, [dispatch, id])
    
    console.log(items);

    return (
        <>
        {
            !loading ?
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 30,
            }}>
                <ItemDetail product={items}/>
            </div>
            :
            <Loader/>
        }
        </>
    )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.product.loading,
    items: state.product.items,
    hasErrors: state.product.hasErrors,
})

// Connect Redux to React
export default connect(mapStateToProps)(ItemDetailContainer)
