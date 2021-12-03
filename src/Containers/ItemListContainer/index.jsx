import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { getProducts, getProductsByCategory } from '../../Services/getItems';
import ItemList from '../../Components/ItemList';
import './styles.scss'
import Loader from '../../Components/Loader';
import { connect } from 'react-redux';
import { getItemsCategoryRedux, getItemsRedux } from '../../Redux/Actions/productActions';

const ItemListContainer = ({dispatch, items, loading, hasErrors}) => {
    
    const {categoryId} = useParams();
    // const [products, setProducts] = useState([]);
    console.log(items, loading, hasErrors);

    useEffect( ()=> {
        
        console.log("Entro al use effect");

        //Despachamos uno u otro dependiendo si ingresa o no el categoryId
        if (categoryId !== undefined){
            
            dispatch(getItemsCategoryRedux(categoryId))

        } else {
            
            dispatch(getItemsRedux())

        }

    }, [dispatch, categoryId])

    return (
        <>
        {loading ?
        <Loader/>
        :
        <ItemList items={items}/>
        }
        </>
    )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.products.loading,
    items: state.products.items,
    hasErrors: state.products.hasErrors,
})

// Connect Redux to React
export default connect(mapStateToProps)(ItemListContainer)

