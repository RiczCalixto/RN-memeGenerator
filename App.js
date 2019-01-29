/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textTop: '',
      textBot: ''
    }

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeVowels(text) {
    let newText = text.toLowerCase();

    newText = newText.replace(/(a|e|o|u)/g, 'i');
    newText = newText.replace(/(á|à|ã|â)/g, 'i');
    newText = newText.replace(/(é|ê|è)/g, 'i');
    newText = newText.replace(/(ó|ô|ò)/g, 'i');
    newText = newText.replace(/(ú|ù|û)/g, 'i');
    return newText.toUpperCase();
  }
  onChangeInput(inputValue) {
    let s = this.state;
    s.textTop = inputValue.toUpperCase();
    s.textBot = this.onChangeVowels(inputValue);
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Meme Generator</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="TYPE HERE"
            onChangeText={this.onChangeInput} />
        </View>
        <View style={styles.memeArea}>
          <Text
            style={[styles.text, styles.textTop]}>
            {this.state.textTop}</Text>
          <Image style={styles.meme} source={require('./img/mimimi.jpg')} />
          <Text style={[styles.text, styles.textBot]}>
            {this.state.textBot}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    flexDirection: 'column'
  },
  title: {
    fontSize: 30,
    color: '#999'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    margin: 20,
    padding: 10,
    height: 40
  },
  inputArea: {
    alignSelf: 'stretch'
  },
  meme: {
    width: 350,
    height: 350,
    marginTop: -70,
    zIndex: 0
  },
  memeArea: {
    width: 350,
    height: 350,
    marginTop: 10
  },
  text: {
    fontSize: 15,
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70

  },
  textTop: {
    zIndex: 1,

  },
  textBot: {
    zIndex: 1,
    marginTop: -70
  }
});
