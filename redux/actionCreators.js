// import defaultDataKake from "./reducer/dataFakeReducer";


export function INCREMENT() {
    return { type: 'INCREMENT' };
}
export function DECREMENT() {
    return { type: 'DECREMENT' };
}
export function START(order_detail_item) {
    return { type: 'START',order_detail_item};
}
export function STARTJOB() {
    return { type: 'STARTJOB' };
}
export function COMPLETEDJOB() {
    return { type: 'COMPLETEDJOB' };
}
export function COMPLETED(idOder) {
    return { type: 'COMPLETED',idOder };
}
export function ToggleBtn(id) {
    return { 
        type: 'TOGGLE_BTNJOB',
        id,
     };
}

export function showCompleted() {
    return { type: 'FILTER_COMPLETED' };
}

export function showAll() {
    return { type: 'FILTER_SHOW_ALL' };
}

export function showProcessing() {
    return { type: 'FILTER_PROCESSING' };
}
export function changer_color() {
    return { type: 'CHANGER_COLOR' };

}

export function FETCH_JOB(){
    return { type: 'FETCH_JOB' };
}

export  function FETCH_SUCCEEDED(receivedJob){
    return {
        type: 'FETCH_SUCCEEDED',
        receivedJob
    }
}

export const FETCH_FAILED = (error) => {
    return {
        type: 'FETCH_FAILED',
        error
    }
}

