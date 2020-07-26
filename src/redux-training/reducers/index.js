import { combineReducers } from 'redux';
import FoodReducer from './food-reducer';
import UserReducer from './user-reducer';
import activeFoodReducer from './active-food-reducer';

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer,
    activeFood: activeFoodReducer
});

export default allReducers;
