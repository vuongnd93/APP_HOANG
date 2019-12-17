

const StartJobBtn = (state = 'NO', action) => {
    if (action.type === 'CHECKJOB') return 'PROCESSING';
    if (action.type === 'COMPLETEDJOB') return 'COMPLETED';
    if (action.type === 'ERROR') return 'ERROR';
  
    return state;
};

export default StartJobBtn;