const initState = false;
console.log('Default: ', initState);

const myR = (state = initState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state = !state
    }
    return state;
}

export default myR;
