

// import {FETCH_JOB, FETCH_SUCCEEDED, FETCH_FAILED } from '../actionCreators';
const defaultState = {
    Job: [],
    isLoading: false,
    error: false
};
const JobReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCEEDED':
            return {Job:action.receivedJob, error:false,isLoading:false};
        case 'FETCH_FAILED':
            return {Job:[], error:true,isLoading:false};
        
        default:
            return state; //state does not change
    }
}

export default JobReducers;