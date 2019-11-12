import * as React from 'react';
import { Text, View, StyleSheet, Image,
  Button,Alert,TouchableOpacity,ScrollView,
  Dimensions,StatusBar,TextInput
 } from 'react-native';
 import backSpecial from '../assets/backs.png';
 import { connect } from 'react-redux';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import Swipeout from 'react-native-swipeout';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';




 class JobListItems extends React.Component {
    constructor(props){
     super(props);
       
    }
    static navigationOptions = ({navigation})=>{
      return { 
        title : 'List công việc'    
      }    
     };

 
  // setStateJob(){
  //   if(this.props.idAction!==this.props.actionID){
  //     return false
  //   }else if(this.props.actionID==''){return true}
   
  // else{return true }
  // }
  render() {
    return (
     
         <TouchableOpacity
          disabled={(this.props.idAction===this.props.actionID)|(this.props.actionID==='')?false:true}
          onPress={this.props.onPress}>     
           
          <View 
          style={{
            flexDirection: 'row',
            backgroundColor:(this.props.idAction===this.props.actionID)|(this.props.actionID==='')?'#DD3C6E':'#808080',
            // backgroundColor: '#DD3C6E',
            marginHorizontal :10,
            marginTop : 10,
            paddingHorizontal :10,
            borderRadius :2,
            padding: 10,
          }} >
              <View style={styles.wrapper_row}>
                    <View style={styles.view_oder}>
                      <Text style={styles.oder_id }>Đơn Hàng</Text>
                      <Text style={styles.oder_content}>{this.props.id}</Text>
                    </View>  
                    <View style={styles.view_oder}>
                      <Text style={styles.oder_id }>Thời gian</Text>
                      <Text style={styles.oder_content}>{this.props.time}</Text>
                    </View>  
                    <View style={styles.view_oder}>
                      <Text style={styles.oder_id }>Trạng Thái</Text>
                        <Text style={{color:'yellow'}}>
                          {this.props.idAction!==this.props.actionID?'INACTIVE':this.props.stateOder}
                        </Text>
                    </View> 
              </View> 
              <TouchableOpacity 
                  disabled={(this.props.idAction===this.props.actionID)|(this.props.actionID==='')?false:true}
              onPress={this.props.onPress} >
                  <Image source={backSpecial} style={{ width: 20, height: 20, marginVertical:20 }}/>
              </TouchableOpacity>
           
          </View>

         </TouchableOpacity>    
                                                                                   
    )}
}
function mapStateToProps(state) {
  return { 
    myData: state.DataJob.Job,
    stateOder: state.stateOder.stateOder,
    actionID : state.stateOder.idOder,
  };
}
export default connect(mapStateToProps)(JobListItems);



const styles = StyleSheet.create({
    // wrapper: { flex: 1, backgroundColor: '#fff' },
    wrapper_oder :{
      flexDirection: 'row',
      backgroundColor: '#DD3C6E',
      marginHorizontal :10,
      marginTop : 10,
      paddingHorizontal :10,
      borderRadius :2,
      padding: 10,
    },
    wrapper_row:{
      flex:80,
    },
    view_oder : { 
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 3,
     },
    oder_id : { color: '#fff', fontWeight: 'bold' },
    oder_content: { color: '#fff' },

});