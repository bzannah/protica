import authReducer from './authReducer'
import { combineReducers } from 'redux';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
}) // will be in the state of the root reducer

export default rootReducer;
