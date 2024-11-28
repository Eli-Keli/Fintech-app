import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const Group = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Together We Achieve</Text>
        <TextInput style={styles.searchBar} placeholder="Search groups..." />
      </View>

      {/* Main Body */}
      <View style={styles.mainBody}>
        {/* Group Overview Cards */}
        <View style={styles.groupCard}>
          <Text style={styles.groupName}>Family Chama</Text>
          {/* <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.8} color="#00ff00" /> */}
          <Text>80% Complete</Text>
          <Text>10 active members</Text>
          <Text>$500 contributed this month</Text>
        </View>
        {/* Add more group cards as needed */}

        {/* Group Chat Panel */}
        <View style={styles.chatPanel}>
          <Text>Group Chat</Text>
          {/* Add chat functionality here */}
        </View>

        {/* Voting Section */}
        <View style={styles.votingSection}>
          <Text>Vote on this month’s contribution target</Text>
          {/* Add voting functionality here */}
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createGroupButton}>
          <Text>Create New Group</Text>
        </TouchableOpacity>
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
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
  mainBody: {
    flex: 1,
  },
  groupCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatPanel: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  votingSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  createGroupButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Group;