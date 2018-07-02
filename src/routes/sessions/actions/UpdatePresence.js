export const UPDATE_PRESENCE  = 'UPDATE_PRESENCE';

//action that is dispatched when presence status is updated
export function updatePresence(selectedIndex,presence) {

    return {
        type: UPDATE_PRESENCE,
        payload:{
            selectedIndex,
            presence
        }
    }
}