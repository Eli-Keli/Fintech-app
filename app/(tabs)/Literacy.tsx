import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Literacy = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Learn & Grow Financially!</Text>
        {/* <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.25} /> */}
        <Text style={styles.progressText}>25% Complete</Text>
      </View>

      {/* Main Body */}
      <View style={styles.mainBody}>
        <View style={styles.cardContainer}>
          <TouchableOpacity activeOpacity={0.7} style={[styles.moduleCard, styles.cardBig]}>
            <Text>Budgeting Basics</Text>
            <Text>Status: Not Started</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={[styles.moduleCard, styles.cardBig]}>
            <Text>Savings Strategies</Text>
            <Text>Status: In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={[styles.moduleCard, styles.cardBig]}>
            <Text>Investing 101</Text>
            <Text>Status: Completed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pollWidget}>
          <Text>What’s your next financial goal?</Text>
          {/* Poll options and results can be added here */}
        </View>

        <View style={styles.quizSection}>
          <Text>Virtual Budgeting Challenge</Text>
          {/* Link to mini-games or quizzes */}
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.leaderboardTitle}>Top Learners this Week</Text>
        {/* Leaderboard widget can be added here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressText: {
    fontSize: 16,
    marginTop: 10,
  },
  mainBody: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  moduleCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    width: '48%',
  },
  cardBig: {
    height: 150,
  },
  pollWidget: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  quizSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Literacy;