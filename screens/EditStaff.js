/**
 * EditStaff.js by Abdel Haddad 16/06/2026
 * Used to add a new staff profile or update an existing one.
 * Displays a form and saves changes to the staff list.
 */
//imports
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import Header from './Header';

export default function EditStaff({
  route,
  navigation,
  staffList,
  setStaffList,
}) {
  // Existing staff profile to edit
  const staff = route.params?.staff;
  // Form state
  const [name, setName] = useState(staff?.name || '');
  const [phone, setPhone] = useState(staff?.phone || '');
  const [department, setDepartment] = useState(staff?.department || '');
  const [street, setStreet] = useState(staff?.address?.street || '');
  const [city, setCity] = useState(staff?.address?.city || '');
  const [state, setState] = useState(staff?.address?.state || '');
  const [zip, setZip] = useState(staff?.address?.zip || '');
  const [country, setCountry] = useState(staff?.address?.country || '');
  // save or update staff profile
  const save = () => {
    if (!name) {
      Alert.alert('Error', 'Name is required');
      return;
    }
  // Update or insert staff record
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
      <View style={styles.container}>
        {/* Header */}
        <Header title= {staff ? 'Update Staff Profile' : 'Add Staff Profile'}  />

        {/* Back button under logo */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

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
  );
}

/* STYLES */
const styles = StyleSheet.create({

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
    fontSize: 22,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#595959',
    paddingVertical: 12,
    width: '75%',
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#ffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});