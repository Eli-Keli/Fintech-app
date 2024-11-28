import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Hi, Jane! Welcome to FinWise</Text>
        {/* Progress Circle */}
      </View>

      {/* Main Body */}
      <View style={styles.mainBody}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Savings Progress</Text>
          {/* <BarChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [{ data: [20, 45, 28, 80, 99, 43] }]
            }}
            width={300}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: { borderRadius: 16 }
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          /> */}
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Budget Summary</Text>
          {/* <PieChart
            data={[
              { name: 'Food', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Rent', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Transport', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Entertainment', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 }
            ]}
            width={300}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 }
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          /> */}
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Group Updates</Text>
          <Text>Your group saved 10% more this month!</Text>
          <Text>New message in 'Family Chama'</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Set a Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Add Savings Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Join a Group</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.dailyTip}>“Did you know? Saving just $1 a day adds up to $365 a year!”</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 80,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressCircle: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  mainBody: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dailyTip: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default Home;