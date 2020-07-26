const initialState = false;
console.log('Default: ', initialState);

const myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state = !state;
    }
    return state;
}

export default myReducer;
