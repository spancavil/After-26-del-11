import * as actions from '../Actions/productActions';

export const initialState = {
    item : {},
    loading : true,
    hasErrors: false,
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        //by id
        case actions.GET_ITEM:
            return {...state, loading:true}
        case actions.GET_ITEM_SUCCESS:
            return { items: action.payload, loading: false, hasErrors: false}
        case actions.GET_ITEM_FAILURE:
            return {...state, loading: false, hasErrors: true}

        default:
            return state
    }
}