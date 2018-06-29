import {call, put, takeLatest} from 'redux-saga/effects'
import {GET_NEWS, newsLoaded} from "./actions";

function fetchNewsFromServer()
{
    return fetch('http://localhost:3001/news')
        .then( (response) => response.json())
        .then ( (response) => response )
}

function* getNews() {
    const items = yield call(fetchNewsFromServer);

    yield put(newsLoaded(items));
}

export default function*() {
    yield takeLatest(GET_NEWS, getNews);
}
