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

    //equal space on left & right
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  containerTablet: {
    paddingHorizontal: 40,   //more space on tablet
    marginBottom: 20,
  },

  logoContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  logo: {
    width: '100%',
    height: 70,
  },

  logoTablet: {
    height: 90,
  },

  titleContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#262626',
  },

  titleTablet: {
    fontSize: 24,
  },
});
