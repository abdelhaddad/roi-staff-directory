// IMPORTS 
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Header from './Header';
import BannerImage from '../components/BannerImage';

// COMPONENTS
export default function ManageStaffList({
  navigation,
  staffList,
  setStaffList,
}) {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const filteredStaff = staffList.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.department.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search)
  );

  // DELETE button to delete selected staff profile
  const deleteSelectedStaff = () => {
    if (!selectedId) return;

    setStaffList((prevList) =>
      prevList.filter((staff) => staff.id !== selectedId)
    );

    setSelectedId(null);
  };

  // JSX
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <Header title="Manage Staff Profiles" />

      {/*image for managestaff screen*/}
        <BannerImage
          source={require('../assets/managestaff_image.png')}
          bannerHeight={150}       // adjust size on screen
          overlayOpacity={0.25}
        />

      {/*home button to return user to home screen*/}
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate('Home')}
        >
        <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>

        {/* Search */}
        <TextInput
          style={styles.search}
          placeholder="Search name, department or phone"
          value={search}
          onChangeText={setSearch}
        />

        {/* Staff list */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={filteredStaff}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.card,
                  item.id === selectedId && styles.selectedCard,
                ]}
                onPress={() => setSelectedId(item.id)}
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.department}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Action bar */}
        <View style={styles.actionBar}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('EditStaff')}
          >
            <Text style={styles.actionText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              !selectedId && styles.disabled,
            ]}
            onPress={() =>
              selectedId &&
              navigation.navigate('EditStaff', {
                staff: staffList.find((s) => s.id === selectedId),
              })
            }
          >
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              !selectedId && styles.disabled,
            ]}
            onPress={deleteSelectedStaff}
          >
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// STYLES
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

  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
  },

  card: {
    padding: 15,
    backgroundColor: '#eee',
    marginBottom: 10,
  },

  selectedCard: {
    backgroundColor: '#f2c6c6',
  },

  name: {
    fontWeight: 'bold',
  },

  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#ddd',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },

  actionButton: {
    backgroundColor: '#941a1d',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  disabled: {
    opacity: 0.4,
  },

  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});