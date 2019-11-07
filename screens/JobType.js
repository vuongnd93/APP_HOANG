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
import { FETCH_JOB } from '../redux/actionCreators';





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
    _renderMessage =()=>{
        return(
            <View style={styles.view_message}>
            <Text style={styles.message}>{this.getJobMessage()}</Text>
        </View>)
    }
    
    getJobMessage() {
        const {error, isLoading} = this.props;
        if (isLoading) return '...Loading';
        if (error) return 'Vui Lòng Thử Lại....';
    }
  
  render() {
  
    const {btnStatus, myData } = this.props;
    return (

      <View  style={styles.wrapper}>    
               <TouchableOpacity style={styles.view_button} onPress={() =>this.props.FETCH_JOB()}>  
                        <Text style={styles.textGetjob}>GetJob...</Text>
                </TouchableOpacity>  
                {this.props.error?this._renderMessage():null}  
       
            <View style={styles.activeStyle}>    
            <FlatList           
            data={myData}
            renderItem={({ item, index }) => <JobTypeItems
            index={index}
            parentFlatList={this}
             job={item.job}  
             id={item.Oder_id}           
             onPress={() => this.props.navigation.navigate('JobList',{detail:item.oder_detail,})}         
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
        myData: state.DataJob.Job,
        error: state.DataJob.error,
        isLoading: state.DataJob.isLoading,
        btnStatus: state.filterStatus
    };
  }
export default connect(mapStateToProps,{FETCH_JOB})(JobType);

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
        justifyContent:'center',
        alignItems: 'center',
    },
    message:{
        color: 'blueviolet',
        fontSize: 30,
        alignItems: 'center',
    },
    view_message:{
        backgroundColor:'#fff',
         flex:30,
        alignItems:'center',
    },
    textGetjob:{
        color:'yellow',
        fontSize: 15,
    },
});