const initialState = {
    token: ''
  };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TOKEN':
        return {
            ...state,
            token: action.payload
        };
        default:
        return state;
    }
};