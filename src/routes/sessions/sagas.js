import {call, put, takeLatest} from 'redux-saga/effects'
import {GET_SESSIONS, sessionsLoaded} from "./actions/GetSessions";

function fetchSessionsFromServer()
{
    return fetch('http://localhost:3001/sessions')
        .then( (response) => response.json())
        .then ( (response) => response )
}

function* getSessions() {
    const items = yield call(fetchSessionsFromServer);

    yield put(sessionsLoaded(items));
}

export default function*() {
    yield takeLatest(GET_SESSIONS, getSessions);
}
