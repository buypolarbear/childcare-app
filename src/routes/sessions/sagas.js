import {call, put, takeLatest} from 'redux-saga/effects'
import {GET_SESSIONS, sessionsLoaded} from "./actions/GetSessions";

function fetchSessionsFromServer(day)
{
    return fetch(`http://localhost:3001/sessions?day=${day}`)
        .then( (response) => response.json())
        .then ( (response) => response )
        .catch((err)=>
            alert("Something went wrong, please try again ")
        )
}

function* getSessions(day) {
    const items = yield call(fetchSessionsFromServer,day.payload);
    yield put(sessionsLoaded(items));
}

export default function*() {
    yield takeLatest(GET_SESSIONS, getSessions);
}
