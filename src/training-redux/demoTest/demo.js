import { createStore } from 'redux';
import { status, colors } from './actions'
import myR from './reducers'

const store = createStore(myR);

store.dispatch(status());
store.dispatch(colors());

console.log(store.getState());
