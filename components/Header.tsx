import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={icons.star} style={styles.starImage} />
      <View style={styles.titleContainer}>
        <Text style={[styles.title,]}>Hi, Jane! Welcome back to FinWise</Text>
      </View>
      <Image 
        source={icons.notification}
        style={styles.nofificationImage}
      />
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
    headerContainer: {
      // borderColor: "red",
      // borderWidth: 1,
      paddingVertical: 20,
      marginTop: 25,
      flexDirection: "row",
      alignItems: "center",
    },
    starImage: {
        width: 46,
        height: 44,
    },
    nofificationImage: {
        width: 44,
        height: 44,
    },
    titleContainer: {
      flex: 1,
      alignItems: "center",
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });