import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
  },
  square: {
    width: 200, 
    height: 200, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default App;
