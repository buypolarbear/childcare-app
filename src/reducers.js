import { combineReducers } from 'redux'
import newsReducer from './routes/news/reducer';

export default combineReducers({
    news: newsReducer
});