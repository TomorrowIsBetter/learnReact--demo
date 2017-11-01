export const ADD_COUNT = 'ADD_COUNT';
export const ADD_COUNT_SUCCESS = 'ADD_COUNT_SUCCESS';
export const ADD_COUNT_FAILURE = 'ADD_COUNT_FAILURE';

export const DEC_COUNT_FAILURE = 'DEC_COUNT_FAILURE';
export const DEC_COUNT = 'DEC_COUNT';
export const DEC_COUNT_SUCCESS = 'DEC_COUNT_SUCCESS';

export const addCount = () => dispatch => {
    dispatch({
        type: ADD_COUNT,
        text: '增加count数',
    });
};

export const decCount = () => dispatch => {
    dispatch({
        type: DEC_COUNT,
        text: '减少count数',
    });
};

