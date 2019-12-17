
import AsyncStorage from 'react-native';
const defaultState = {
    stateOder: 'INACTIVE',
    checkJob:'NO',
    idOder: '',
};

//  async function getStatusOder(){
//     let status = await AsyncStorage.getItem(stateOder);
//     console.log('stateOder, status = ',status);
//     return status;
// }
// let defaultState="";
//  async ()=>{
//     defaultState = await AsyncStorage.getItem(stateOder);
//     console.log('stateOder, status = ',status);
//     return defaultState;
// }

const stateOder = (state = defaultState, action) => {
    if (action.type === 'CHANGERSTATE') return {stateOder:'ACTIVE',idOder:action.oder_id_state};
    if (action.type === 'CHANGERCOMPLETED') return {stateOder:'COMPLETED',idOder:action.id};
    // if (action.type === 'END') return 'COMPLETED';
  
    return state;
};

export default stateOder;