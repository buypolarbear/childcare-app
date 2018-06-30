export const UPDATE_PRESENCE  = 'UPDATE_PRESENCE';

export function updatePresence(presence) {

    return {
        type: UPDATE_PRESENCE,
        payload:presence
    }
}