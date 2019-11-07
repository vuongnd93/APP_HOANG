
// import { delay } from 'redux-saga';
// import { all } from 'redux-saga/effects';

// import { sayHello } from './counterSagas';
// import {  watchIncrement,watchDecrement } from './counterSagas';

// export default function* rootSaga() {
//     yield all([
//         // sayHello(),
//         watchIncrement(), 
//         watchDecrement(), 
//     ]);
// }

import { call, all } from 'redux-saga/effects';
import { watchFetchJob } from './Jobsagas';

export default function* rootSaga() {
    yield call(watchFetchJob);              
}