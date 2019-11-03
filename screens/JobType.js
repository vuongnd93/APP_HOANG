import * as React from 'react';
import { Text, View, StyleSheet, Image,
  Button,Alert,TouchableOpacity,ScrollView,
  Dimensions,StatusBar,TextInput,Modal,TouchableHighlight
,FlatList,RefreshControl } from 'react-native';
 import { connect } from 'react-redux';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import Filter from './Filter';
import JobTypeItems from './JobTypeItems';





 class JobType extends React.Component {
    constructor(props){
     super(props)
     this.state = ({
        deletedRowKey: null,            
    });   
 }
    static navigationOptions = ({navigation})=>{
      return { 
        title : 'List công việc'    
      }    
     };
     refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
       
    }   
  
  render() {
  
    const {btnStatus, myData } = this.props;
    return (

      <View  style={styles.wrapper}>    
               <TouchableOpacity style={styles.view_button}>  
                    <Button title="GetJOB ....." onPress={this.onChooseImagePress}/>
                </TouchableOpacity>  
       
            <View style={styles.activeStyle}>    
            <FlatList           
            data={myData}
            renderItem={({ item, index }) => <JobTypeItems
            index={index}
            parentFlatList={this}
             job={item.job}  
             id={item.Oder_id}           
             onPress={() => this.props.navigation.navigate('JobList')}         
              />}
            keyExtractor={item => item.Oder_id}
            refreshControl={
                <RefreshControl
                   refreshing={false}
                />
            }
      />
             </View> 
       </View>  
         

    )}
}

function mapStateToProps(state) {
    return { 
        myData: state.dataFake,
        btnStatus: state.filterStatus
    };
  }
export default connect(mapStateToProps)(JobType);

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    activeStyle: {
        flex:90,
        marginHorizontal: 10,
    },
    header:{
       backgroundColor:'#27B397',
       padding:20,
       justifyContent: 'center',
        alignItems: 'center'
    },
    text_header:{
      alignItems: 'center',
      color:'#fff'
    },
    view_button:{
        marginTop: 15,
        backgroundColor :'#29007B',
        marginHorizontal: 10,
        width :130,
        height:50,
        borderRadius: 20,
        paddingVertical: 9,
        marginBottom:15,
    }
});