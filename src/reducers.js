import { combineReducers } from 'redux'
/*all reducers*/
import newsReducer from './routes/news/reducer';
import sessionsReducer from './routes/sessions/reducers/sessions'

export default combineReducers({
    news: newsReducer,
    sessions: sessionsReducer
});