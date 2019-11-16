
// import { FETCH_JOB, FETCH_SUCCEEDED, FETCH_FAILED } from '../redux/actionCreators';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* FetchJob() {
    console.log(`This is FETCH_JOB`);
    try {
        const receivedJob = yield Api.getJobTypeApi();         
        yield put({ type: 'FETCH_SUCCEEDED',receivedJob: receivedJob});         
    } catch (error) {        
        yield put({ type:'FETCH_FAILED', error });
    }
}
export function* watchFetchJob() {
    yield takeLatest('FETCH_JOB', FetchJob);
}

function* statJob(action) {
    console.log(`#Jobsagas.js This is START_JOB`);
    console.log(action.id);
    try {
        const result = yield Api.postStartJob(action.stateJob); 
        if (result =='OK'){
            yield put({ type: 'STARTJOB', order_detail_id: action.id});  
            yield put({ type: 'CHANGERSTATE', id:action.id});
        }        
               
    } catch (error) {        
        yield put({ type: 'ERROR'});
    }
}
export function* watchStartJob() {
    yield takeLatest('START', statJob);
}

function* CompletedJob(action) {
    console.log(`This is COMPLETED_JOB`);
    console.log(action.idOder);
    try {
        const result = yield Api.postStartJob(action.idOder); 
        if (result =='OK'){
            yield put({ type: 'COMPLETEDJOB'});  
            yield put({ type: 'CHANGERCOMPLETED', id:action.idOder});
        }        
               
    } catch (error) {        
        yield put({ type: 'ERROR'});
    }
}
export function* watchCompletedJob() {
    yield takeLatest('COMPLETED', CompletedJob);
}


