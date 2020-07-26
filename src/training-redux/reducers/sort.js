const initialState = {
    by: 'name',
    value: 1
}
console.log('Default: ', initialState);

const myReducer = (state = initialState, action) => {
    if (action.type === 'SORT_STATUS') {
        const { by, value } = action.sort;
        return { by, value }
    }
    return state;
}

export default myReducer;
