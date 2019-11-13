
import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View,
  Alert,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';
import AddModal from '../components/addmodal';
import { connect } from 'react-redux';
import Form from '../components/form';
import {COMPLETED} from '../redux/actionCreators';
import backSpecial from '../assets/buy_plus.png';



  class  EventComponent extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        isAdding: false
      }
      this._onPressAdd = this._onPressAdd.bind(this); 
      this._onAddForm =  this._onAddForm.bind(this); 
    }
   _onAddForm(){
    if(this.state.isAdding ===false){
      this.setState({
        isAdding: true
      })
    }else{
      this.setState({
        isAdding: false
      })
    } 
   }
  _onPressAdd () {
    // alert("You add Item");
    this.refs.addModal.showAddModal();
}

_onCompletedJob = async ()=>{
  const {params}= this.props.navigation.state;
   idOder = params.id
  console.log(idOder);
  let stateJob= this.props.stateJob;
  Alert.alert(
    'Đồng ý! Hoàn thành Công việc',
    '',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () =>this.props.COMPLETED(idOder,stateJob)},
    ],
    {cancelable: false},
  );

  //  this.props.START(START);
    // try {
    //  let status = await AsyncStorage.getItem('status');
    //  console.log('status = ',status);
    //  if (status ==='PROCESSING'){
    //   await AsyncStorage.setItem('status', 'STOP');
    //   this.setState({
    //     btnStartEndName: 'START',
    //   });
    //  }else {
    //     await AsyncStorage.setItem('status','PROCESSING');
    //     this.setState({
    //       btnStartEndName: 'END',
    //     });
    //  }
    // } catch (error) {
    //    console.log(error);
    // }
  }


  render() {
    console.log(this.props.stateJob);
    return (
     <View style={styles.container} >
        <View style={styles.header} >
          <Text style={styles.text}>Sự kiện</Text>
        </View>

         <View style={styles.acident} >
              <Text style={styles.option_text}>Chọn sự kiện</Text>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.text}>Tất cả sự kiện</Text>
                <TouchableOpacity onPress={this._onAddForm} >
                    <Image source={backSpecial} style={{ width: 30, height: 30 }}/>
                </TouchableOpacity >
            </TouchableOpacity>
            {this.state.isAdding ? <Form/> : null}
        </View>
      
      
         {/* <View style={styles.acidentDetail} >           */}
            <View  style={styles.sukien_buttom}> 
              <TouchableOpacity style={styles.endjob}
               disabled={this.props.stateJob==='PROCESSING'?false:true}
               onPress={() => {this._onCompletedJob()}}   >      
                     <Text style={styles.sukien_text}>Completed</Text>                    
              </TouchableOpacity >
            </View>
        {/* </View> */}
            <AddModal ref = {'addModal'}>
            </AddModal>
     </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myData: state.dataFake,
    btnStatus: state.filterStatus,
    stateJob: state.StartJob
   };
}

export default connect(mapStateToProps,{COMPLETED})(EventComponent);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'blueviolet'
  },
  sukien:{
    flex:70,
    backgroundColor:'darkorange',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:30,
  },
  endjob:{
    width:80,
    height:50,
    backgroundColor:'yellow',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    
  },

  sukien_click:{
    backgroundColor:'chartreuse',
    width:100,
    height:80,
    marginRight:5,
    padding:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent: 'space-between',
  },
  sukien_buttom:{
    flex:20,
    textAlign:'right',
    alignItems:'center',
    justifyContent:'center'
    
  },
  header: {
    flex:10,
    backgroundColor :'blanchedalmond',
    alignItems:'center',
    paddingTop:10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius:40,
  },
  option:{
     flexDirection:'row',
    justifyContent: 'space-between',
     backgroundColor:'#00ffff',
     padding:10,
     marginHorizontal:20,
     marginTop:10,
     borderRadius:50,
     
  },

  text:{
   color:'#b22222',
   fontSize:15,
  },
  option_text:{
    fontSize:20,
    color:'#fff',
    marginTop:10,
  },
  acident: {
   flex:70,
   backgroundColor:'blueviolet',
   alignSelf: 'stretch',
  },
  
});
