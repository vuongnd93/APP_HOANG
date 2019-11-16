import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import JobListItems from './JobListItems';
import Filter from './Filter';

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Công việc'
    }
  };

  async componentWillMount() {

    // const { btnStatus, myData } = this.props;
    // const { params } = this.props.navigation.state;
    // const oder_id = params.oder_id;
    // const oder_detail=[];
    // this.props.myData.map(e => {
    //   // console.log('#jobReducer loop e = ', e.Oder_id);
    //   if(e.Oder_id===oder_id){
    //       // e.oder_detail.map(e1 => {
    //       //   // console.log('#jobReducer loop e = ', e1.Oder_detail_id);
    //       //   if (e1.Oder_detail_id === oder_detail_id) {
    //       //     status = e1.status;
    //       //   }
    //       // })
    //       this.props.oder_detail=e.oder_detail;
    //   }
      
    // })
  }


  getWordList() {
      const { btnStatus, myData } = this.props;
      const { params } = this.props.navigation.state;
      const oder_id = params.oder_id;
      // const oder_detail=[];
      this.props.myData.map(e => {
        // console.log('#jobReducer loop e = ', e.Oder_id);
        if(e.Oder_id===oder_id){
            // e.oder_detail.map(e1 => {
            //   // console.log('#jobReducer loop e = ', e1.Oder_detail_id);
            //   if (e1.Oder_detail_id === oder_detail_id) {
            //     status = e1.status;
            //   }
            // })
            // oder_detail=e.oder_detail;
            return e.oder_detail;
            // break;
        }
        
      })
      return oder_detail;
  }

  render() {
    const { params } = this.props.navigation.state;
    const oder_id = params.oder_id;
    return (
      <View style={styles.container}>
        <View style={styles.listjob}>
          <FlatList

            data={this.getWordList()}
            renderItem={({ item }) => <JobListItems
              Oder_detail_id={item.Oder_detail_id}
              id={item.Order}
              time={item.Odertime}
              status={item.status}
              onPress={() => this.props.navigation.navigate('JobDetail', { oder_id:oder_id,Oder_detail_id:item.Oder_detail_id })}
            />}
            keyExtractor={item => item.Oder_detail_id}
          />
        </View>
        <Filter />

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myData: state.DataJob.Job,
    btnStatus: state.filterStatus,
    // oder_detail=[]
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
  listjob: {
    flex: 10,
  },

});
