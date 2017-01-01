import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  post:PostReducer
});

export default rootReducer;
