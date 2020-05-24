import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const reducers = combineReducers({
    rootReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
