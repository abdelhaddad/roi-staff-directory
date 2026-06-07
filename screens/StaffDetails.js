import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BannerImage from '../components/BannerImage';

export default function StaffDetails({ route, navigation }) {
  const { staff } = route.params;

  return (
    <View style={styles.container}>
      {/*image for managestaff screen*/}
        <BannerImage
          source={require('../assets/staffdetails_image.png')}
          bannerHeight={150}       // adjust image size
          overlayOpacity={0.25}
        />
      <BackButton navigation={navigation} />
      <Text style={styles.title}>Staff Profile</Text>

      <Detail label="Name" value={staff.name} />
      <Detail label="Phone" value={staff.phone} />
      <Detail label="Department" value={staff.department} />

      <Text style={styles.section}>Address</Text>
      <Detail label="Street" value={staff.address.street} />
      <Detail label="City" value={staff.address.city} />
      <Detail label="State" value={staff.address.state} />
      <Detail label="ZIP" value={staff.address.zip} />
      <Detail label="Country" value={staff.address.country} />
    </View>
  );
}

function Detail({ label, value }) {
  return (
    <Text>
      <Text style={{ fontWeight: 'bold' }}>{label}: </Text>{value}
    </Text>
  );
}
/* Back button under logo */
   /* <TouchableOpacity
      style={styles.backBtn}
      onPress={() => navigation.goBack()}
    >
    <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>*/

/* Back button under logo */
function BackButton({ navigation }) {
  return (
   /* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.home}>Home</Text>
    </TouchableOpacity>*/
    <TouchableOpacity
      style={styles.backBtn}
      onPress={() => navigation.goBack()}
    >
    <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  backText: {
    color: '#941a1d',
    fontWeight: 'bold',
  },

  title: { fontSize: 20, marginBottom: 10 },
  section: { marginTop: 10, fontWeight: 'bold' },
  /*home: { alignSelf: 'flex-end', marginBottom: 10, color: '#941a1d' },*/
});
