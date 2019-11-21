import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Getapex from './screens/getapex';
import Login from './screens/Login';
import JobType  from  './screens/JobType';
import JobList  from  './screens/JobList';
import JobDetail  from  './screens/JobDetail';
import EventComponent  from  './screens/EventComponent';
import EventOnGo  from  './screens/EventOnGo';




const MainNavigator = createStackNavigator({  

    Home: {screen: Login},
    JobType: {screen: JobType},
    JobList: {screen :JobList },
    JobDetail: {screen: JobDetail},
    EventComponent: {screen: EventComponent },  
    EvenOnGo: {screen: EventOnGo },
  });
  

export default MainNavigator;  