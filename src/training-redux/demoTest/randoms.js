const initState = {
    name: 'colorful',
    color: 'red'
}
console.log('Default: ', initState);

const myR = (state = initState, action) => {
    if (action.type === 'COLOR_FUL') {
        const { name, color } = action.colors;
        return { name, color };
    };
    return state;
}

export default myR;
