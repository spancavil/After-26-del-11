import * as actions from '../Actions/productActions';

export const initialState = {
    items : [],
    loading : true,
    hasErrors: false,
}

export default function productsReducer(state = initialState, action) {

    switch(action.type) {

        //All products
        case actions.GET_ITEMS:
            return {...state, loading:true}
        case actions.GET_ITEMS_SUCCESS:
            return { items: action.payload, loading: false, hasErrors: false}
        case actions.GET_ITEMS_FAILURE:
            return {...state, loading: false, hasErrors: true}
        
        //by category
        case actions.GET_ITEMS_CATEGORY:
            return {...state, loading:true}
        case actions.GET_ITEMS_CATEGORY_SUCCESS:
            return { items: action.payload, loading: false, hasErrors: false}
        case actions.GET_ITEMS_CATEGORY_FAILURE:
            return {...state, loading: false, hasErrors: true}

        default:
            return state
    }
} 