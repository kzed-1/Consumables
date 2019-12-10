import {combineReducers} from 'redux';
import sessionsErrorsReducer from './session_errors_reducers';

const errorsReducer = combineReducers({
    session: sessionsErrorsReducer
})

export default errorsReducer;