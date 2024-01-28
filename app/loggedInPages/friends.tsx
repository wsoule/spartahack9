import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Friend {
  id: string;
  name: string;
}

interface FriendsProps {
  friends: Friend[];
}

const Friends: React.FC<FriendsProps> = ({ friends }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends List</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  friendItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default Friends;
