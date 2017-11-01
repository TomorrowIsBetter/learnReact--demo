import * as COUNT_ACTIONS from '../action/action';

export default (state = {count: 0, value: ''}, action) => {
    switch (action.type) {
        case COUNT_ACTIONS.ADD_COUNT: {
            let count = state.count + 1;
            return Object.assign({}, {count: count}, {value: action.text});
        }
        case COUNT_ACTIONS.DEC_COUNT : {
            let deCount = state.count - 1;
            return Object.assign({}, {count: deCount}, {value: action.text});
        }
        default :
            return state;
    }
};