import React from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

import DeputyList from '../components/deputies_list';


export const Tabs = TabNavigator({
  Home:{
    screen: DeputyList,
    navigationOptions:{
      tabBarLabel:'Accueil',
    },
  },

})
