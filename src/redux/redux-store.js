import { combineReducers, createStore } from "redux";

import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: messagesReducer
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;