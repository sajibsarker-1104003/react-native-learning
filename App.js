import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello Sajib..</Text>
      <Text style={styles.textStyle}>Hello Sajib..</Text>
      <Text style={styles.textStyle}>Hello Sajib..</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //justifyContent: 'space-between',
    //justifyContent: 'flex-start',

    //flexDirection:'column',
    flexDirection:'row',
    //flexDirection:'column-reverse',
  },
  textStyle:{
    color:"red",
  },
});
