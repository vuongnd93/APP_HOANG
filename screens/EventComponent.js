
import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View,
  Alert,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';
import AddModal from '../components/addmodal';
import Form from '../components/form';
import backSpecial from '../assets/buy_plus.png';



export default class  EventComponent extends React.Component {
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

  render() {
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
              <TouchableOpacity style={styles.endjob}>
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
