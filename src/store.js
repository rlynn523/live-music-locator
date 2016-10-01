import redux from 'redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/events';

let store = createStore(reducers, applyMiddleware(ReduxThunk));
module.exports = store;
