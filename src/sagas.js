import newsSagas from './routes/news/sagas';

import { call, all } from 'redux-saga/effects'

export default function*() {
    yield all([
        call(newsSagas)
    ]);
}