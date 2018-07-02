import {call, put, takeLatest} from 'redux-saga/effects'
import {GET_SESSIONS, sessionsLoaded} from "./actions/GetSessions";

// function to fetch sessions for a day from server
function fetchSessionsFromServer(selectedDate)
{
    return fetch(`http://localhost:3001/sessions?day=${selectedDate}`)
        .then( (response) => response.json())
        .then ( (response) => response )
        .catch((err)=>
            console.log("Something went wrong, please try again ")
        )
}


function* getSessions(date) {
    
    const selectedDate=date.payload
    const items = yield call(fetchSessionsFromServer,selectedDate);
    yield put(sessionsLoaded(items));

}

export default function*() {
    yield takeLatest(GET_SESSIONS, getSessions);
}
