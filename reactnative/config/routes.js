import React from 'react';
import {TabNavigator} from 'react-navigation';
import Deputies_List from '../components/deputies_list';
import DeputyDetail from '../components/deputy_detail';
import App from '../App';


const Tabs = TabNavigator({

  Home:{
    screen: Deputies_List,
  }
}, {
  initialRouteName:Deputies_List
});


export default Tabs;
