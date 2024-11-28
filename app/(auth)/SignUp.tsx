import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Image, TouchableOpacity } from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';


import { icons } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const submit = () => {
    console.log(form);
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView indicatorStyle="white">
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

          <Text style={styles.title}>Create Account</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(text: string) => setForm({ ...form, username: text })}
            placeholder="Your username"
            otherStyles={styles.formField}
          />

          <FormField
            title="Email Address"
            value={form.email}
            handleChangeText={(text: string) => setForm({ ...form, email: text })}
            placeholder="Your email"
            otherStyles={styles.formField}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(text: string) => setForm({ ...form, password: text })}
            placeholder="Your password"
            otherStyles={styles.formField}
          />

            <View style={styles.checkboxContainer}>
              <BouncyCheckbox
                size={20}
                fillColor="black"
                iconStyle={styles.checkbox}
                isChecked={true}
              />
              <Text style={styles.checkboxText}>I accept the terms and privacy policy</Text>
            </View>

          <CustomButton
            title="Sign Up"
            handlePress={submit}
          />

          <Text style={styles.orText}>Or Register with</Text>

          <View style={styles.socialButtonsContainer}>
            <CustomButton
              title="Mobile"
              handlePress={() => {}}
              containerStyles={styles.socialButton}
              textStyles={styles.socialButtonText}
            />
            <CustomButton
              title="Google"
              handlePress={() => {}}
              containerStyles={styles.socialButton}
              textStyles={styles.socialButtonText}
            />
            <Image
              source={icons.google}
              style={styles.googleImage}
            />
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <Link href="/SignIn" style={styles.signUpLink}>Log in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 60,
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
    marginBottom: 38,
  },
  formField: {
    marginTop: 0,
    marginBottom: 20,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  checkbox: {
    // marginRight: 12,
  },
  checkboxText: {
    fontSize: 14,
  },
  forgotPassword: {
    color: '#000000',
  },
  orText: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
  socialButtonsContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8DADC',
    paddingVertical: 18,
    paddingHorizontal: 45,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  socialButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  googleImage: {
    position: 'absolute',
    right: 125,
    top: 30,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    marginRight: 5,
  },
  signUpLink: {
    fontSize: 16,
    color: '#000000',
  },
});
