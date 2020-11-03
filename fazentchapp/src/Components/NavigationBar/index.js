import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StatusBar, StyleSheet} from 'react-native';

import Style from './style';

import Home from '../../pages/Home';
import Signup from '../../pages/Signup';
import OrderReview from '../../pages/OrderReview';

const Tab = createBottomTabNavigator();

const NavigationBar = () =>{ 

    return(
      <>
        <StatusBar backgroundColor={'#222626'} />
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{style: {backgroundColor: '#222626' }}} initialRouteName="Home">
            <Tab.Screen 
              name="Home" 
                component={Home}
                  options={{tabBarIcon: () => (
                    <Image style={Style.img} source={require('../../assets/icons/home.png')}/>
                  )}}
              />
            <Tab.Screen 
              name="Cadastre-se"
                component={Signup}
                  options={{tabBarIcon: () => (
                    <Image style={Style.img} source={require('../../assets/icons/addpessoa.png')}/>
                  )}}
            />
            <Tab.Screen 
              name="Cesta de Produtos" 
                component={OrderReview}
                  options={{tabBarIcon: () => (
                    <Image style={Style.img} source={require('../../assets/icons/cesta.png')}/>
                  )}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
}

export default NavigationBar;