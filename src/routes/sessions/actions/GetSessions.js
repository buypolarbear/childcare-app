export const GET_SESSIONS = 'GET_SESSIONS';
export const SESSIONS_LOADED  = 'SESSIONS_LOADED';

//action that is dispatched to get sessions for a day
export function getSessions(date) {
    return {
        type: GET_SESSIONS,
        payload:date
    }
}

//action that gets called inorder to load sessions to state
export function sessionsLoaded(items) {
    return {
        type: SESSIONS_LOADED,
        payload: items
    }
}
