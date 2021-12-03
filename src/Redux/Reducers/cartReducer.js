export const initialState = {
    cart : [],
    loading : false,
    hasErrors: false,
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
} 