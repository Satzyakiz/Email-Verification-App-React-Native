import React from 'react';
import {View, Text, Platform, StyleSheet, StatusBar, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Success</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'data:image/png;base64,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',
            }}></Image>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
