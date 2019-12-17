

import axios from 'axios';
import StartJob from '../redux/reducer/StartJob';
// import axios from 'axios';
// import httpsAgent from 'axios';
// import https from 'axios';
// import https from 'https'
const urlGetJobType = 'http://221.133.17.20:3030/api/view';
const urlGetJob = 'https://hcerp.vn/ords/retail/Delivery/Get_Deliveries';


function* getJobTypeApi() {
        const response = yield axios(urlGetJob,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            data: '',      
        });     
            console.log(response.data);   
            const JobType = yield response.status === 200 ? response.data.data: []       
            return JobType;
}

function* postStartJob(oder_state) {
    console.log(oder_state);
    const response = yield axios(urlGetJobType, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        data: '',
      
    });
    console.log(response.data);
    const JobType = yield response.status === 200 ? response.data: []  
    // console.log(JobType);     
    return JobType;
}

function* PostCompletedJob(stateJob) {
    console.log(stateJob);
    const response = yield axios(urlCompletedJob, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        data: '',
      
    });
    console.log(response.data);
    const JobType = yield response.status === 200 ? response.data: []  
    // console.log(JobType);     
    return JobType;
}




export const Api = {
    getJobTypeApi,postStartJob,PostCompletedJob
}; 