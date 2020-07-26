import * as types from './../constants/ActionTypes';


const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}

const guid = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4() + s4();
}
const initialState = [
    {
        id: 1,
        name: 'dang cap nhat 1',
        weight: 10
    },
    {
        id: 2,
        name: 'dang cap nhat 2',
        weight: 20
    },
    {
        id: 3,
        name: 'dang cap nhat 3',
        weight: 30
    }
];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD_TASK:
            console.log(action);
            const newTask = {
                id: guid(),
                name: action.item.name,
                weight: action.item.weight,
                // status: action.item.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
};

export default myReducer;
