import {SESSIONS_LOADED} from "../actions/GetSessions";
import {UPDATE_PRESENCE} from '../actions/UpdatePresence'
import update from 'immutability-helper';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SESSIONS_LOADED:
            return {
                ...state,
                items: action.payload
            };
        
        case UPDATE_PRESENCE:
            switch(action.payload.presence){
                
                case 'unknown':
                {
                return update(state, { 
                    items: { 
                      [action.payload.selectedindex]: {
                        presence: {$set: 'present'}
                      }
                    }
                  });
            }
                
                case 'present':
                {
                return update(state, { 
                    items: { 
                      [action.payload.selectedindex]: {
                        presence: {$set: 'picked up'}
                      }
                    }
                  });
                }
                case 'picked up':
                {
                    return update(state, { 
                        items: { 
                          [action.payload.selectedindex]: {
                            presence: {$set: 'unknown'}
                          }
                        }
                      });
                    }
                default:return state
            }
            

        default:
            return state;
    }

}