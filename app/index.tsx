import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { StatusBar } from "expo-status-bar";

import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function index() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor='#EFEFEF' style='dark' />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <Image
            source={images.illustration}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
          <View style={styles.descContainer}>
            <Text style={styles.heading}>Explore the App</Text>
            <Text style={styles.subheading}>Now your finances are in one place and always under control</Text>
          </View>
          <CustomButton
            title="Sign In"
            handlePress={() => router.push("/(auth)/SignIn" as any)}
          />
          <CustomButton
            title="Create Account"
            handlePress={() => router.push("/(tabs)/Home" as any)}
            containerStyles={styles.btnContainer}
            textStyles={styles.btnText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  descContainer: {
    marginBottom: 66,
  },
  illustrationImage: {
    width: 315,
    height: 273,
    marginBottom: 55,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    textAlign: 'center',
  },
  btnContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  btnText: {
    color: '#000000',
  },
});