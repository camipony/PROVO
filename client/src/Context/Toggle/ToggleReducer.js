import {
    ACTIVE_TOGGLE
} from '../type'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case ACTIVE_TOGGLE:
            return {
                ...state,
                activeToggle: payload
            }
        default:
            return state;
    }
}