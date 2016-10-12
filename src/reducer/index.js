import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import active from './active';

const rootReducer = combineReducers({
  routing:routerReducer,
  TweetList:active.TweetList
})

export default rootReducer;
