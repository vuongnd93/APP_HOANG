import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Getapex from './components/getapex';
import Login from './screens/Login';
import JobType  from  './screens/JobType';
import JobList  from  './screens/JobList';
import JobDetail  from  './screens/JobDetail';
import EventComponent  from  './screens/EventComponent';
import EventOnGo  from  './screens/EventOnGo';
import SHOWMAP  from  './screens/ShowMapView';
import OnGoEdit  from  './screens/OngoEdit';
import ProductDetail  from  './screens/productdetail';




const MainNavigator = createStackNavigator({  
    //  Home: {screen: OnGoEdit},
    // // Home: {screen: ProductDetail},
    SHOWMAP: {screen: SHOWMAP},
    Home: {screen: Login},
    JobType: {screen: JobType},
    JobList: {screen :JobList },
    JobDetail: {screen: JobDetail},
    EventComponent: {screen: EventComponent },  
    EvenOnGo: {screen: EventOnGo },
    // ShowMapView: {screen: ShowMapView },
    // Home: {screen: OnGoEdit},
  });
  

export default MainNavigator;  