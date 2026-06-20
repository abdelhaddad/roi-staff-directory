/**
 * StaffList.js by Abdel Haddad 16/06/2026
 * Displays a searchable list of staff profiles.
 * Allows user to select a staff member and view profile details.
 */
//Imports
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import BannerImage from '../components/BannerImage';

export default function StaffList({ navigation, route, staffList }) {
  const { largeText } = route.params || {};
  const [search, setSearch] = useState(''); //State to store search input
//Filter staff list based on search text
  const filtered = staffList.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.department.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search)
  );

  return (
      <View style={styles.container}>
        {/* Header */}
        <Header title="Search Staff Profile" />

      {/*image for managestaff screen*/}
        <BannerImage
          source={require('../assets/stafflist_image.png')}
          bannerHeight={150}  // adjust Banner size
          overlayOpacity={0.25}
        />

      {/*home button to return user to home screen*/}
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate('Home')}
        >
        <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>
      {/* search input field */}
      <TextInput
        style={[styles.search, largeText && styles.largeSearch]}
        placeholder="Search name, department or phone"
        placeholderTextColor="#666"
        value={search}
        onChangeText={setSearch}
      />
      {/* Scrollable list of staff profiles */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
        navigation.navigate('StaffDetails', { staff: item, largeText })
      }
    >
      <Text style={[styles.name, largeText && styles.largeListText]}>
        {item.name}
      </Text>
      <Text style={[styles.department, largeText && styles.largeListText]}>
        {item.department}
      </Text>
    </TouchableOpacity>
  )}
/>
    </View>
  );
}
// home button to return the user to home page
function HomeButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.home}>Home</Text>
    </TouchableOpacity>
  );
}
// Defining styles for screen contents
const styles = StyleSheet.create({
  
// style for the screen frame
container: {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: 10,
},
// style for the home button
homeBtn: {
  alignSelf: 'flex-end',
  marginBottom: 10,
},
// style for the text in the home button
homeText: {
  color: '#941a1d',
  fontWeight: 'bold',
  fontSize: 22,
},
  
search: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 8,
  marginBottom: 10,
  fontSize: 16,          // base font size
},

largeSearch: {
  fontSize: 22,          // larger font size when enable large text is pressed
  padding: 12,           
},

  card: { padding: 15, backgroundColor: '#eee', marginBottom: 10 },
  name: {
  fontSize: 16,          // base font size when enable large text is not pressed
  fontWeight: 'bold',
},

department: {
  fontSize: 14,
},

largeListText: {
  fontSize: 22,          // larger font size when enable large text is pressed
},
  /*home: { alignSelf: 'flex-end', marginBottom: 10, color: '#941a1d', fontWeight: 'bold' },*/
});