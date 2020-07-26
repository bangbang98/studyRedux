// export const inc = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// export const dec = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// export const sort = () => {
//     return {
//         type: 'SORT'
//     }
// }

// export const status = () => {
//     return {
//         type: 'FALSE'
//     }
// }

import * as types from './../constants/ActionType';

export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort: {
            by: 'da cap nhat',
            value: -1
        }
    }
}
