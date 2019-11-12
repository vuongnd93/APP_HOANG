

const StartJobBtn = (state = 'START', action) => {
    if (action.type === 'STARTJOB') return 'PROCESSING';
    if (action.type === 'COMPLETED') return 'COMPLETED';
    if (action.type === 'ERROR') return 'ERROR';
  
    return state;
};

export default StartJobBtn;