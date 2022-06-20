import { combineReducers, createStore } from "redux";

import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    messagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;