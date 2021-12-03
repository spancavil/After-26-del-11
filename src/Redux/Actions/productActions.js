export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const GET_ITEMS_CATEGORY = 'GET_ITEMS_CATEGORY';
export const GET_ITEMS_CATEGORY_SUCCESS = 'GET_ITEMS_CATEGORY_SUCCESS';
export const GET_ITEMS_CATEGORY_FAILURE = 'GET_ITEMS_CATEGORY_FAILURE';

export const GET_ITEM = 'GET_ITEM';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

//Get all items
export const getItems = () => ({
    type: GET_ITEMS
})

export const getItemsSuccess = (items) => ({
    type: GET_ITEMS_SUCCESS,
    payload: items
})

export const getItemsFailure = () => ({
    type: GET_ITEMS_FAILURE
})

export function getItemsRedux () {
    return async(dispatch) => {
        dispatch(getItems())
        try {
            fetch('https://fakestoreapi.com/products')
            .then( res => res.json())
            .then( data => {
                dispatch(getItemsSuccess(data));
            }) 
        } catch (error) {
            dispatch(getItemsFailure())
        }
    }
}

//Get Items by category
export const getItemsCategory = () => ({
    type: GET_ITEMS_CATEGORY
})

export const getItemsCategorySuccess = (items) => ({
    type: GET_ITEMS_CATEGORY_SUCCESS,
    payload: items
})

export const getItemsCategoryFailure = () => ({
    type: GET_ITEMS_CATEGORY_FAILURE
})

export function getItemsCategoryRedux (category) {
    return async(dispatch) => {
        dispatch(getItemsCategory())
        try {
            fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then( res => res.json())
            .then( data => {
                dispatch(getItemsCategorySuccess(data));
            }) 
        } catch (error) {
            dispatch(getItemsCategoryFailure())
        }
    }
}

//Get Items by Id
export const getItem = () => ({
    type: GET_ITEM
})

export const getItemSuccess = (items) => ({
    type: GET_ITEM_SUCCESS,
    payload: items
})

export const getItemFailure = () => ({
    type: GET_ITEM_FAILURE
})

export function getItemRedux (id) {
    return async(dispatch) => {
        dispatch(getItem())
        try {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then( res => res.json())
            .then( data => {
                dispatch(getItemSuccess(data));
            }) 
        } catch (error) {
            dispatch(getItemFailure())
        }
    }
}
