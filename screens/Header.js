/**
 * Header.js by Abdel Haddad 16/06/2026
 * contains company styled logo and title for other navigation screens to use.
 * Aim is to minimise repitition of inserting images/title and their styles
 */
//Imports
import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

export default function Header({ title }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.container, isTablet && styles.containerTablet]}>
      {/* Logo (left half) */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/ROI_Logo.jpg')}
          style={[styles.logo, isTablet && styles.logoTablet]}
          resizeMode="contain"
        />
      </View>

      {/* Title (right half) */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, isTablet && styles.titleTablet]}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15, 
  },

  containerTablet: {
    paddingHorizontal: 40,   //more space on tablet
    marginBottom: 20,
  },

  logoContainer: {
  width: '50%',
  justifyContent: 'center',   // fixed
  alignItems: 'center',       // centre logo in its half
},

  logo: {
    width: '100%',
    height: 120,
  },

  logoTablet: {
    height: 160,
  },

  titleContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#262626',
  },

  titleTablet: {
    fontSize: 32,
    paddingLeft: 30,
  },
});
