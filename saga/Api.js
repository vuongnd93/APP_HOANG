import axios from 'axios';
const urlGetJobType = 'http://221.133.17.20:3030/api/view';

function* getJobTypeApi() {
    const response = yield axios(urlGetJobType, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        data: '',
      
    });
    // console.log(response);
    const JobType = yield response.status === 200 ? response.data.datafake: []  
    // console.log(JobType);     
    return JobType;
}
export const Api = {
    getJobTypeApi
}; 