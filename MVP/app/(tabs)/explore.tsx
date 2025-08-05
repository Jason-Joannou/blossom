import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Tab - Basic Version</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // Add explicit white background
  },
  text: {
    color: '#000000', // Add explicit black text color
    fontSize: 18,
  },
});