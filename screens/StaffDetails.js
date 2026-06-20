/**
 * StaffDetails.js by Abdel Haddad 16/06/2026
 * Displays detailed information for a selected staff profile.
 * This is a read-only view screen.
 * back option to return to StaffList screen
 */
//imports
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BannerImage from '../components/BannerImage';

export default function StaffDetails({ route, navigation }) {
  const { staff, largeText } = route.params; //Selected staff profile passed via navigation

  return (
    <View style={styles.container}>
      {/*image for managestaff screen*/}
        <BannerImage
          source={require('../assets/staffdetails_image.png')}
          bannerHeight={150}       // adjust image size
          overlayOpacity={0.25}
        />
      {/*back navigation button positioned above details list */}  
      <BackButton navigation={navigation} /> 

    <Text style={[styles.heading, largeText && styles.largeHeading]}>
      Staff Profile
    </Text>
      {/* Staff Details to display on the screen*/}
      <Detail label="Name" value={staff.name} largeText={largeText} />
      <Detail label="Phone" value={staff.phone} largeText={largeText} />
      <Detail label="Department" value={staff.department} largeText={largeText} />

      <Text style={[styles.heading, largeText && styles.largeHeading]}>
      Address
      </Text>
      <Detail label="Street" value={staff.address.street} largeText={largeText} />
      <Detail label="City" value={staff.address.city} largeText={largeText} />
      <Detail label="State" value={staff.address.state} largeText={largeText} />
      <Detail label="ZIP" value={staff.address.zip} largeText={largeText} />
      <Detail label="Country" value={staff.address.country} largeText={largeText} />
    </View>
  );
}
/* Function to display details of selected staff */
function Detail({ label, value, largeText }) {
  return (
    <Text style={[styles.detailText, largeText && styles.largeText]}>
      <Text style={[styles.detailLabel, largeText && styles.largeText]}>
        {label}:
      </Text>{' '}
      {value}
    </Text>
  );
}
/* Back button under logo */
function BackButton({ navigation }) {
  return (
   /* Back navigation button */
    <TouchableOpacity
      style={styles.backBtn}
      onPress={() => navigation.goBack()}
    >
    <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
}
// Style of items displayed on the screen
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  backText: {
    color: '#941a1d',
    fontWeight: 'bold',
    fontSize: 22,
  },

heading: {
  fontSize: 20,
  fontWeight: 'bold',
},

largeHeading: {
  fontSize: 32,
},

detailText: {
  fontSize: 16,
  marginBottom: 6,
},

detailLabel: {
  fontWeight: 'bold',
},

largeText: {
  fontSize: 28,
},

});
