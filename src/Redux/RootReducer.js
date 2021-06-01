import {combineReducers} from 'redux'

import userdataReducer from './userdata/userdataReducer';
var RootReducer=combineReducers({
    user:userdataReducer
})
export default RootReducer;