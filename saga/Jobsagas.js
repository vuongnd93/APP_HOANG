
// import { FETCH_JOB, FETCH_SUCCEEDED, FETCH_FAILED } from '../redux/actionCreators';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* FetchJob() {
    console.log(`This is FETCH_JOB`);
    try {
        const receivedJob = yield Api.getJobTypeApi();         
        yield put({ type: 'FETCH_SUCCEEDED', receivedJob: receivedJob });         
    } catch (error) {        
        yield put({ type: 'FETCH_FAILED', error });
    }
}
export function* watchFetchJob() {
    yield takeLatest('FETCH_JOB', FetchJob);
}


