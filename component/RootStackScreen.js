import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignUpScreen from './SignUpScreen';
import VerifyOtp from './VerifyOtp';
import Success from './Success';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="VerifyOtp" component={VerifyOtp} />
    <RootStack.Screen name="Success" component={Success} />
  </RootStack.Navigator>
);

export default RootStackScreen;
