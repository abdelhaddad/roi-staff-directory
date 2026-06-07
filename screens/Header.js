import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ROI_Logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    width: '100%',     // controls size of logo in relation to screen
    height: 140,      // fixed height
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
``