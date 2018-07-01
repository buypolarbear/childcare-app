import {SESSIONS_LOADED} from "../actions/GetSessions";
import {UPDATE_PRESENCE} from '../actions/UpdatePresence'

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SESSIONS_LOADED:
            return {
                ...state,
                items: action.payload
            };
        
        case UPDATE_PRESENCE:
            switch(action.payload){
                case 'unknown':
                console.log("state",state.items[0].presence)
                return {
                    ...state,
                    presence:action.payload
                }
                case 'present':return{
                    ...state,presence:action.payload
                }
                case 'picked up':return{
                    ...state,presence:action.payload
                }
                default:return state
            }
            

        default:
            return state;
    }

}