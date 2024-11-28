import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import PhoneNumber from 'react-native-international-phone-number';


import BouncyCheckbox from 'react-native-bouncy-checkbox';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { icons } from '@/constants';
import { router } from 'expo-router';

const Phone = () => {
  const [form, setForm] = useState({
    phoneNumber: '',
    selectedCountry: null,
  });

  const handleChangePhone = (phone: string) => {
    setForm(prevForm => ({
      ...prevForm,
      phoneNumber: phone
    }));
  }

  const handleChangeCountry = (country: any) => {
    setForm(prevForm => ({
      ...prevForm,
      selectedCountry: country
    }));
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.5}>
              <Image
                source={icons.back}
                style={styles.backImage}
              />
            </TouchableOpacity>
            <Image
              source={icons.star}
              style={styles.starImage}
            />
          </View>

          <Text style={styles.title}>Log In</Text>

          <Text style={styles.instruction}>Please confirm your country code and enter your phone number.</Text>

          <PhoneNumber 
            value={form.phoneNumber}
            onChangePhoneNumber={handleChangePhone}
            selectedCountry={form.selectedCountry}
            onChangeSelectedCountry={handleChangeCountry}
            placeholder='Your phone number'
            keyboardType='numeric'
          />

          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={20}
              fillColor="black"
              iconStyle={styles.checkbox}
              isChecked={true}
            />
            <Text style={styles.checkboxText}>Sync Contacts</Text>
          </View>

          <CustomButton
            title="Continue"
            handlePress={() => { }}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Phone;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 150,
    paddingHorizontal: 20,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backImage: {
    width: 39,
    height: 39,
    marginBottom: 20,
  },
  starImage: {
    width: 46,
    height: 44,
    marginBottom: 20,
  },
  title: {
    width: '100%',
    fontSize: 28,
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    opacity: 0.7,
  },
  formField: {
    marginTop: 0,
    marginBottom: 20,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },
  checkbox: {
    // marginRight: 12,
  },
  checkboxText: {
    fontSize: 14,
  },
});
