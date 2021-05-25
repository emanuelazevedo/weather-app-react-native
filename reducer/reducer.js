export default (state, action) => {
    switch(action.type) {
        case 'ADD_CITY':

            return {
                ...state,
                initialState: [action.payload, ...state.initialState]
            }
        default:
            return state;
    }
}