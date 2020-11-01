import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, StyleSheet} from 'react-native';

import Home from '../../pages/Home';
import Signup from '../../pages/Signup';
import OrderReview from '../../pages/OrderReview';

const Tab = createBottomTabNavigator();

const NavigationBar = () =>{

  


    return(
      <>
        <StatusBar backgroundColor={'#222626'} />
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Signup" component={Signup}/>
            <Tab.Screen name="OrderReview" component={OrderReview}/>
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
}

export default NavigationBar;