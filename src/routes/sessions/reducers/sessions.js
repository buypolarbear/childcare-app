import {SESSIONS_LOADED} from "../actions/GetSessions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SESSIONS_LOADED:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }

}