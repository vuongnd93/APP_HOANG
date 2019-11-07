
import { combineReducers } from 'redux';
import countReducer from './couterReducer';
import filterStatusReducer from './filterStatusReducer';
import dataJakeReducer from './dataFakeReducer';
import startEndbtn from './aStartEnd';
import changer_color from './changer_color';
import JobReducers from './JobReducer';




const reducer = combineReducers({
    count: countReducer, 
    filterStatus : filterStatusReducer,
    dataFake : dataJakeReducer,
    startEndJob : startEndbtn,
    changer_color: changer_color,
    DataJob: JobReducers,
});

export default reducer;