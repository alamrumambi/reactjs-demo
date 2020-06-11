import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import teamReducer from './reducers/teamReducer';
import favTeamReducer from './reducers/favTeamReducer';

const reducer = combineReducers({
    teamReducer,
    favTeamReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;