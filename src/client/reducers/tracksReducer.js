// @flow
const tracksReducer = (state: {
    list: Array<Object>,
    isLoading: boolean,
    isError: boolean
} = {
    list: [],
    isLoading: false,
    isError: false
}, action: Object) => {
    switch (action.type) {
        case 'REQUEST_TRACKS':
            return {...state, isLoading: true};
        case 'TRACKS_ERROR':
            return {...state, isLoading: false, isError: true}
        case 'RECEIVE_TRACKS':
            return {...state, list: action.payload, isLoading: false, isError: false};
        default:
            return {...state};
    }
};

export default tracksReducer;
