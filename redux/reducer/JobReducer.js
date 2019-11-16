

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
        case 'STARTJOB':
            // console.log('#JobReducer', state)
            // state.Job.map (e => {
            //     // console.log('#jobReducer loop e = ', e.Oder_id);
            //     e.oder_detail.map (e1 => {
            //         // console.log('#jobReducer loop e = ', e1.Oder_detail_id);
            //         if (e1.Oder_detail_id === action.order_detail_id){
            //             e1.status = "PROCESSING"
            //         }
            //     })
            // })
            
            action.order_detail_item.status = "PROCESSING";
            // console.log('#JobReducer', state)
            return state;
            // return action.order_detail_item;
            // return {...action.order_detail_item, status: 'PROCESSING'}
        default:
            return state; //state does not change
    }
}

export default JobReducers;