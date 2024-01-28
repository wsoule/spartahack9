import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const UserHub: React.FC = () => {

  const username = '';
  const points = 12;

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Username: {username}</Text>
      <Text style={styles.points}>Points Earned: {points}</Text>
      <TouchableOpacity style={styles.friendsBtn} onPress={() => router.navigate('/loggedInPaged/friends')}>
        <Text style={styles.points}>Friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  points: {
    fontSize: 18,
    marginBottom: 20,
  },
  friendsBtn: {
    marginTop: 30,
    backgroundColor: '#4682b4',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '20%',
    height: '10%',
    justifyContent: 'center'
  }
});

export default UserHub;
