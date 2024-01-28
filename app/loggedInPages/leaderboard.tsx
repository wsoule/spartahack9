import React from 'react';
import { FlatList, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';

const tempUsers = [
  {
    id: 1,
    name: 'John Doe',
    score: 100,
  },
  {
    id: 2,
    name: 'Jane Doe',
    score: 200,
  },
  {
    id: 3,
    name: 'John Smith',
    score: 300,
  },
];

interface User {
  id: number;
  name: string;
  score: number;
}

interface LeaderboardProps {
  users: User[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ users }) => {
  users = tempUsers;
  const username = 'John Doe'; // Replace with your own name
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.score}</Text>
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
