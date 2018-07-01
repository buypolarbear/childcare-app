export const UPDATE_PRESENCE  = 'UPDATE_PRESENCE';

export function updatePresence(selectedindex,presence) {

    return {
        type: UPDATE_PRESENCE,
        payload:{selectedindex,presence}
    }
}