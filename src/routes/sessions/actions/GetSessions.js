export const GET_SESSIONS = 'GET_SESSIONS';
export const SESSIONS_LOADED  = 'SESSIONS_LOADED';

export function getSessions() {
    return {
        type: GET_SESSIONS
    }
}

export function sessionsLoaded(items) {
    return {
        type: SESSIONS_LOADED,
        payload: items
    }
}
