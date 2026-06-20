/*
 * App.js by Abdel Haddad 16/06/2026
 * Home screen of the ROI Staff Directory application.
 * User will be able to navigate to other screens from this home page.
 */
//Imports
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useWindowDimensions } from 'react-native';

// Importing different Screens that the user can navigate to
import StaffList from './screens/StaffList';
import StaffDetails from './screens/StaffDetails';
import ManageStaffList from './screens/ManageStaffList';
import EditStaff from './screens/EditStaff';
import BannerImage from './components/BannerImage';


const Stack = createNativeStackNavigator();

export default function App() {
  //Default state holding staff profile data
  const [staffList, setStaffList] = useState([
    {
      id: '1',
      name: 'John Smith',
      phone: '02 99882211',
      department: 'ICT',
      address: {
        street: '1 Code Lane',
        city: 'Javaville',
        state: 'NSW',
        zip: '0100',
        country: 'Australia',
      },
    },
    {
      id: '2',
      name: 'Sue White',
      phone: '03 88992255',
      department: 'Finance',
      address: {
        street: '16 Bit Way',
        city: 'Byte Cove',
        state: 'Qld',
        zip: '1101',
        country: 'Australia',
      },
    },
  ]);

  return (
    <NavigationContainer> {/* Stack navigation for App screens */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Home Screen */}
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        {/* Staff List Screen */}
        <Stack.Screen name="StaffList">
          {(props) => <StaffList {...props} staffList={staffList} />}
        </Stack.Screen>
        {/* Staff Details Screen */}
        <Stack.Screen name="StaffDetails" component={StaffDetails} />
        {/* Manage Staff List Screen */}
        <Stack.Screen name="ManageStaffList">
          {(props) => (
            <ManageStaffList
              {...props}
              staffList={staffList}
              setStaffList={setStaffList}
            />
          )}
        </Stack.Screen>
        {/* Add/Edit staff screen */}
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
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const [largeText, setLargeText] = useState(false);

  return (
    <View style={[styles.container, isTablet && styles.containerTablet]}>
      {/* Full-width ROI Logo */}
      <Image
        source={require('./assets/ROI_Logo.jpg')}
        style={[styles.logo, isTablet && styles.logoTablet]}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={[styles.title, isTablet && styles.titleTablet]}>
        ROI STAFF DIRECTORY
      </Text>

      {/* Banner Image */}
      <BannerImage
        source={require('./assets/workplace_collaboration.png')}
        bannerHeight={isTablet ? 320 : 260}
        overlayOpacity={0.35}
      />

      {/* Navigation Buttons */}
      <TouchableOpacity
        style={[styles.button, isTablet && styles.buttonTablet]}
        onPress={() => navigation.navigate('StaffList', {largeText})}
      >
        <Text style={[styles.buttonText, isTablet && styles.buttonTextTablet]}>
          View Staff Profiles
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isTablet && styles.buttonTablet]}
        onPress={() => navigation.navigate('ManageStaffList')}
      >
        <Text style={[styles.buttonText, isTablet && styles.buttonTextTablet]}>
          Manage Staff Profiles
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => {
          console.log('TOGGLE PRESSED, current value:', largeText);
          setLargeText(!largeText);
        }}
      >
        <Text style={styles.toggleText}>
          {largeText ? 'Disable Large Text' : 'Enable Large Text'}
        </Text>
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
    height: 150,        //taller logo
    marginBottom: 10,
  },

  title: {
    color: '#941a1d',
    fontSize: 28,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    width: '75%',
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#595959',
    fontSize: 22,
    fontWeight: 'bold',
  },

  containerTablet: {
  paddingHorizontal: 40, //more space on wide screens
},

logoTablet: {
  height: 200, //taller logo on tablet
},

titleTablet: {
  fontSize: 34, //stronger hierarchy
},

buttonTablet: {
  width: '60%', //buttons don’t get too wide
},

buttonTextTablet: {
  fontSize: 24,
},
});
