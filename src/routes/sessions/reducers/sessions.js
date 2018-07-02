import {SESSIONS_LOADED} from "../actions/GetSessions";
import {UPDATE_PRESENCE} from '../actions/UpdatePresence'

import update from 'immutability-helper';

const initialState = {};

export default (state = initialState, {type, payload}) => {

    switch (type) {

        // updates the state with items when SESSIONS_LOADED is fired
        case SESSIONS_LOADED:
            return {
                ...state,
                items: payload
            };
        
        // updates the presence status of session according to the current status
        case UPDATE_PRESENCE:
            switch(payload.presence){
                
                case 'unknown':
                {
                 return update(state, { 
                    items: { 
                      [payload.selectedIndex]: {
                        presence: {$set: 'present'}
                      }
                    }
                  });
                }
                
                case 'present':
                {
                return update(state, { 
                    items: { 
                      [payload.selectedIndex]: {
                        presence: {$set: 'picked up'}
                      }
                    }
                  });
                }

                case 'picked up':
                {
                    return update(state, { 
                        items: { 
                          [payload.selectedIndex]: {
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