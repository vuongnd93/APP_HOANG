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

    const { btnStatus, myData } = this.props;
    const 
    // const { params } = this.props.navigation.state;
    // const oder_detail = params.oder_detail;
    this.props.myData.map(e => {
      // console.log('#jobReducer loop e = ', e.Oder_id);
      e.oder_detail.map(e1 => {
        // console.log('#jobReducer loop e = ', e1.Oder_detail_id);
        if (e1.Oder_detail_id === oder_detail_id) {
          status = e1.status;
        }
      })
    })
  }


  // getWordList() {
  //   const { btnStatus, myData } = this.props;
  //   const { params } = this.props.navigation.state;
  //   const oder_detail = params.oder_detail;

  //   const oder_detail 
  //   if (btnStatus === 'PROCESSING') return myData.filter(e => e.status === 'PROCESSING');
  //   if (btnStatus === 'COMPLETED') return myData.filter(e => e.status === 'COMPLETED');
  //   return oder_detail;
  // }

  render() {

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
              onPress={() => this.props.navigation.navigate('JobDetail', { Oder_detail_item: item })}
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
  listjob: {
    flex: 10,
  },

});
