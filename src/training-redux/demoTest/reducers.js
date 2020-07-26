import { combineReducers } from "redux";
import status from './status';
import randoms from './randoms';

const myR = combineReducers({
    status: status,
    randoms: randoms
})

export default myR;
