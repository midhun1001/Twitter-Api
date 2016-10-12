import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducer/index';
import thunk from 'redux-thunk';

var defaultState = {
  TweetList:{
    tweetArray:[]
  }
};

const store = createStore(rootReducer,defaultState,applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory,store);
export default store;
