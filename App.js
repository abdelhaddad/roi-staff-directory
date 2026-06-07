import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StaffList from './screens/StaffList';
import StaffDetails from './screens/StaffDetails';
import ManageStaffList from './screens/ManageStaffList';
import EditStaff from './screens/EditStaff';
import BannerImage from './components/BannerImage';


const Stack = createNativeStackNavigator();

export default function App() {
  const [staffList, setStaffList] = useState([
    {
      id: '1',
      name: 'John Smith',
      phone: '0400 123 456',
      department: 'IT',
      address: {
        street: '10 George St',
        city: 'Sydney',
        state: 'NSW',
        zip: '2000',
        country: 'Australia',
      },
    },
    {
      id: '2',
      name: 'Sarah Brown',
      phone: '0411 222 333',
      department: 'HR',
      address: {
        street: '25 Pitt St',
        city: 'Sydney',
        state: 'NSW',
        zip: '2001',
        country: 'Australia',
      },
    },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>

        <Stack.Screen name="StaffList">
          {(props) => <StaffList {...props} staffList={staffList} />}
        </Stack.Screen>

        <Stack.Screen name="StaffDetails" component={StaffDetails} />

        <Stack.Screen name="ManageStaffList">
          {(props) => (
            <ManageStaffList
              {...props}
              staffList={staffList}
              setStaffList={setStaffList}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="EditStaff">
          {(props) => (
            <EditStaff
              {...props}
              staffList={staffList}
              setStaffList={setStaffList}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Full-width ROI Logo */}
      <Image
        source={require('./assets/ROI_Logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>ROI Staff Directory</Text>

      {/* Banner Image */}
      <BannerImage
        source={require('./assets/workplace_collaboration.png')}
        bannerHeight={260}       // adjust size of image
        overlayOpacity={0.35}
      />

      {/* Navigation Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StaffList')}
      >
        <Text style={styles.buttonText}>View Staff Profiles</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ManageStaffList')}
      >
        <Text style={styles.buttonText}>Manage Staff Profiles</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D9D9D9', //grey background
  },

  logo: {
    width: '100%',      // full width
    height: 140,        //taller logo
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#941a1d',
    padding: 12,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
