import { combineReducers } from 'redux'
import newsReducer from './routes/news/reducer';
import sessionsReducer from './routes/sessions/reducers/sessions'

export default combineReducers({
    news: newsReducer,
    sessions: sessionsReducer
});