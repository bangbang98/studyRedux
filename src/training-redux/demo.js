import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

// const action = { type: 'TOGGLE_STATUS' };
store.dispatch(status());

// const sortAction = {
//     type: 'SORT_STATUS',
//     sort: {
//         by: 'name',
//         value: -1
//     }
// }

store.dispatch(sort());

console.log('handleChange: ', store.getState());
