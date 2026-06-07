import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import BannerImage from '../components/BannerImage';

export default function StaffList({ navigation, staffList }) {
  const [search, setSearch] = useState('');

  const filtered = staffList.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.department.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search)
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <Header title="Search Staff Profile" />

      {/*image for managestaff screen*/}
        <BannerImage
          source={require('../assets/stafflist_image.png')}
          bannerHeight={150}       // adjust Banner size
          overlayOpacity={0.25}
        />

      {/*home button to return user to home screen*/}
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate('Home')}
        >
        <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>

      <TextInput
        style={styles.search}
        placeholder="Search name, department or phone"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('StaffDetails', { staff: item })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.department}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </SafeAreaView>
  );
}

function HomeButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.home}>Home</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
  flex: 1,
  backgroundColor: '#D9D9D9', //grey background
},

container: {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: 10,
},

homeBtn: {
  alignSelf: 'flex-end',
  marginBottom: 10,
},

homeText: {
  color: '#941a1d',
  fontWeight: 'bold',
},
  search: { borderWidth: 1, padding: 8, marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#eee', marginBottom: 10 },
  name: { fontWeight: 'bold' },
  /*home: { alignSelf: 'flex-end', marginBottom: 10, color: '#941a1d', fontWeight: 'bold' },*/
});