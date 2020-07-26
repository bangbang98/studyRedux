import { SELECT_FOOD, ADD_FOOD, REMOVE_FOOD } from './actionTypes';

export const addFood = (food) => {
    console.log('You add a food: ', food.name);
    return {
        type: ADD_FOOD,
        payload: food
    };
};

export const selectFood = (food) => {
    console.log('You clicked a food with name: ', food.name);
    return {
        type: SELECT_FOOD,
        payload: food
    };
};

export const removeFood = (food) => {
    console.log('You remove a food: ', food.name);
    return {
        type: REMOVE_FOOD,
        payload: food
    };
};
