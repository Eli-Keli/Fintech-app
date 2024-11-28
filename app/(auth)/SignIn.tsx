import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Image, TouchableOpacity, Alert } from 'react-native';


import BouncyCheckbox from 'react-native-bouncy-checkbox';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { icons } from '@/constants';
import { Link, router } from 'expo-router';
import { signIn } from '@/lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password) return Alert.alert('Error', 'Please fill in all fields')

      setIsSubmitting(true)

      try {
          const session = await signIn(form.email, form.password)

          Alert.alert('Success', 'User signed in successfully')
          router.replace('/Home')
      } catch (error) {
        Alert.alert('Error', 'An unknown error occurred');
      } finally {
          setIsSubmitting(false)
      }
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

          <Text style={styles.title}>Sign In</Text>

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

          <View style={styles.actionContainer}>
            <View style={styles.checkboxContainer}>
              <BouncyCheckbox
                size={20}
                fillColor="black"
                iconStyle={styles.checkbox}
                isChecked={true}
              />
              <Text style={styles.checkboxText}>Remember me</Text>
            </View>

            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </View>

          <CustomButton
            title="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <Text style={styles.orText}>Or Login with</Text>

          <View style={styles.socialButtonsContainer}>
            <CustomButton
              title="Mobile"
              handlePress={() => router.push("/(auth)/Phone" as any)}
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
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Link href="/SignUp" style={styles.signUpLink}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
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
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
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
