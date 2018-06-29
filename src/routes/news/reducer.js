// @see https://redux.js.org/basics/reducers

import {NEWS_LOADED} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEWS_LOADED:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }

}