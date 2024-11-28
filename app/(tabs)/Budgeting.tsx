import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const Budgeting = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Master Your Money</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text>This Month</Text>
        </TouchableOpacity>
      </View>

      {/* Main Body */}
      <View style={styles.mainBody}>
        {/* Budget Categories Table */}
        <View style={styles.budgetTable}>
          <View style={styles.budgetRow}>
            <Text style={styles.categoryIcon}>🏠</Text>
            <View style={styles.budgetInfo}>
              <Text>Rent</Text>
              <Text>$200/$250</Text>
              {/* <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.8} color="#ff0000" /> */}
            </View>
          </View>
          <View style={styles.budgetRow}>
            <Text style={styles.categoryIcon}>🍔</Text>
            <View style={styles.budgetInfo}>
              <Text>Food</Text>
              <Text>$150/$200</Text>
              {/* <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.75} color="#00ff00" /> */}
            </View>
          </View>
          {/* Add more budget rows as needed */}
        </View>

        {/* Savings Goals Panel */}
        <ScrollView horizontal style={styles.savingsGoals}>
          <View style={styles.goalCard}>
            <Text>Buy a Laptop</Text>
            <Text>70% Complete</Text>
            {/* <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.7} color="#00ff00" /> */}
          </View>
          <TouchableOpacity style={styles.addGoalCard}>
            <Text>+</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Spending Insights Banner */}
        <View style={styles.spendingInsights}>
          <Text>You spent 15% more on dining this month. Try reducing it to save $50!</Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  mainBody: {
    flex: 1,
  },
  budgetTable: {
    marginBottom: 20,
  },
  budgetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  budgetInfo: {
    flex: 1,
  },
  savingsGoals: {
    marginBottom: 20,
  },
  goalCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    alignItems: 'center',
  },
  addGoalCard: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spendingInsights: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});

export default Budgeting;