import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// ✅ Professional aspect ratio
const ASPECT_RATIO = 16 / 9;

// ✅ Default responsive height calculation
const defaultHeight = Math.min(
  height * 0.35,        // max 35% of screen height
  width / ASPECT_RATIO // proportional to width
);

export default function BannerImage({
  source,
  bannerHeight,        // ✅ optional override
  overlayOpacity = 0.35, // ✅ dark overlay strength
}) {
  const resolvedHeight = bannerHeight || defaultHeight;

  return (
    <View style={[styles.container, { height: resolvedHeight }]}>
      <Image
        source={source}
        style={styles.image}
        resizeMode="cover"
      />

      {/* ✅ Dark overlay */}
      <View
        style={[
          styles.overlay,
          { backgroundColor: `rgba(0,0,0,${overlayOpacity})` },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 6,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
