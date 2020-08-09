import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
  ImageBackground,
  StatusBar,
} from 'react-native';

const image = {
  uri:
    'https://i.pinimg.com/originals/f7/9c/52/f79c5203d3baf7b79b599fc386b35266.jpg',
};
const Landing = () => {
  const [value, onChangeText] = useState('Email');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Inside</Text>

          <Text style={styles.text}> Hello There ! Welcome </Text>
          <TextInput
            style={{height: 40, borderColor: 'white', borderWidth: 1}}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default Landing;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 400,
    height: 800,
    marginTop: 25,
  },
  text: {
    color: 'white',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
