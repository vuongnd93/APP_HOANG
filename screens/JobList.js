import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,FlatList,AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import JobListItems  from './JobListItems';
import Filter from './Filter';

 class JobList extends React.Component {
    constructor(props){
     super(props);
     this.state= {
       datas : [],
     } 
  }
  
  static navigationOptions = ({navigation})=>{
    return { 
      title : 'Công việc'    
    }    
   };
   
   async componentWillMount() {
     
    let status = await AsyncStorage.getItem('status');
    console.log('Constructor, status = ',status);

    if (status === 'PROCESSING') {
      // PROCESSING -> btnStartEnd lable shows END
      this.setState({
        btnStartEndName: 'END',
      });
    } else {
      // Stop -> btnStartEnd lable shows START
      this.setState({
        btnStartEndName: 'START',
      });
    }
 }
   
  
  getWordList() {
    const {btnStatus, myData } = this.props;
    const {params}= this.props.navigation.state;
    const job_Detail= params.detail;
    console.log(btnStatus);
    if (btnStatus === 'PROCESSING') return myData.filter(e => e.status === 'PROCESSING');
    if (btnStatus === 'COMPLETED') return myData.filter(e => e.status === 'COMPLETED');
    return job_Detail;
}

  render() {
   
    return (
      <View style={styles.container}>
         <View style={styles.listjob}> 
           <FlatList
            
            data={this.getWordList()}
            renderItem={({ item }) => <JobListItems
             idAction={item.Oder_detail_id}
             id={item.Order}
             time={item.Odertime}
             status={item.status}
             onPress={() => this.props.navigation.navigate('JobDetail',{detail:item,id:item.Oder_detail_id})}       
              />}
            keyExtractor={item =>item.Oder_detail_id}
      />
         </View>
         <Filter/>
      
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { 
      myData: state.dataFake,
      btnStatus: state.filterStatus
  };
}
export default connect(mapStateToProps)(JobList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  listjob:{
    flex:10,
  },
  
});
