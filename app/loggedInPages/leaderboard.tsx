import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
export type User ={
    _id: string;
    username: string;
    email: string;
    friends: string[]; 
    recycled: number;
    sold: number;
    trash: number;
    points: number;
    badges: string[]; 
    takenItems: string[];
    location: string;
    givenItems: string[]; 
    selling: number;
    sellingItems: string[]; 
    items: string[]; 
    __v: number;
  };
  
const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch(`${process.env.API_URL}/leaderboard`)
      .then(response => response.json())
      .then(data => {
        data.id = data._id;
        setUsers(data)
      });
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={users}
        keyExtractor={item => item._id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.username}</Text>
            <Text style={styles.cell}>{item.points}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.row}>
            <Text style={styles.cell}>Rank</Text>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Score</Text>
          </View>
        )}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Leaderboard;
