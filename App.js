import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './component/RootStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RootStackScreen />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
