import * as types from './ActionTypes';

export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
}

export const colors = (colors) => {
    return {
        type: types.COLOR_FUL,
        colors: {
            name: 'colorFul',
            color: 'yellow'
        }
    }
}
