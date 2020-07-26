// const initialState = {
//     status: false,
//     sort: {
//         by: 'name',
//         value: 1
//     }
// }
// console.log('Default: ', initialState);

// const myReducer = (state = initialState, action) => {
//     if (action.type === 'TOGGLE_STATUS') {
//         state.status = !state.status;
//     }
//     if (action.type === 'SORT_STATUS') {
//         // console.log(action);
//         // state.sort = {
//         //     by: action.sort.by,
//         //     value: action.sort.value
//         // }
//         // return state;
//         const { by, value } = action.sort;
//         const { status } = state;
//         return {
//             status: status,
//             sort: {
//                 by: by,
//                 value: value
//             }
//         }
//     }
//     return state;
// }

import status from './status';
import sort from './sort';
import { combineReducers } from 'redux';

const myReducer = combineReducers({
    status: status,
    sort: sort
});

export default myReducer;
