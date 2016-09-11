/**
 * Sample app from raywenderlich.com
 * Search property listings in the UK
 */

'use strict';

import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Text, NavigatorIOS } from 'react-native';

var SearchPage = require('./SearchPage');

//var React = require('react');
//var ReactNative = reqire('react-native');

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends Component {
  render() {
    // return React.createElement(Text, {style: styles.text}, "Hello, world!");
    // return <Text style={styles.text}> Hello World, again.. </Text>; 
    return(<NavigatorIOS style={styles.container} 
                         initialRoute = {{
                            title: 'Property Finder',
                            component: SearchPage,
                         }}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', function() {
  return PropertyFinderApp;
});