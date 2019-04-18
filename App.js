import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Page1 from './component/Page1';
import Page2 from './component/Page2';



var AppNavigator = createStackNavigator(
  {
    Page1: Page1,
    Page2: Page2,
  },
  {
    initialRouteName: "Page1"
  }
)

export default createAppContainer(AppNavigator);