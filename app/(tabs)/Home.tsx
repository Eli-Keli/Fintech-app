import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor='#EFEFEF' style='dark' />
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
});