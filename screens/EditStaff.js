import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Header from './Header';

export default function EditStaff({
  route,
  navigation,
  staffList,
  setStaffList,
}) {
  const staff = route.params?.staff;

  const [name, setName] = useState(staff?.name || '');
  const [phone, setPhone] = useState(staff?.phone || '');
  const [department, setDepartment] = useState(staff?.department || '');
  const [street, setStreet] = useState(staff?.address?.street || '');
  const [city, setCity] = useState(staff?.address?.city || '');
  const [state, setState] = useState(staff?.address?.state || '');
  const [zip, setZip] = useState(staff?.address?.zip || '');
  const [country, setCountry] = useState(staff?.address?.country || '');

  const save = () => {
    if (!name) {
      Alert.alert('Error', 'Name is required');
      return;
    }

    const updatedStaff = staff
      ? staffList.map((s) =>
          s.id === staff.id
            ? {
                ...s,
                name,
                phone,
                department,
                address: { street, city, state, zip, country },
              }
            : s
        )
      : [
          ...staffList,
          {
            id: Date.now().toString(),
            name,
            phone,
            department,
            address: { street, city, state, zip, country },
          },
        ];

    setStaffList(updatedStaff);
    Alert.alert('Success','Staff profile saved successfully',
  [
    {
      text: 'OK',
      onPress: () => navigation.goBack(),
    },
  ]
);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* ROI Logo */}
        <Header title="" />

        {/* Back button under logo */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Screen title */}
        <Text style={styles.title}>
          {staff ? 'Update Staff Profile' : 'Add Staff Profile'}
        </Text>

        {/* Form */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Department"
          value={department}
          onChangeText={setDepartment}
        />
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={street}
          onChangeText={setStreet}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="ZIP"
          value={zip}
          onChangeText={setZip}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
        />

        {/* Save button */}
        <TouchableOpacity style={styles.button} onPress={save}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D9D9D9', // grey background
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  backText: {
    color: '#941a1d',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#941a1d',
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});