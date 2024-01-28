import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { User } from './leaderboard';
import { API_URL } from '../_layout';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Item = {
  _id: string;
  name: string;
  count: number;
  seller: User;
  status: 'recycled' | 'sold' | 'trash';
  imageUrl: string;
  description: string;
  tags: string[];
}

const Marketplace = () => {
  const [marketData, setMarketData] = useState<Item[]>([]); 
  const [userId, setUserId] = useState<string>('');
  useEffect(() => {
    fetch(`${API_URL}/items`)
      .then(response => response.json())
      .then(data => {
        setMarketData(data)
      }).catch((error) => {
        alert(error);
      });
      // setUserId(await AsyncStorage.getItem("Id"));
  }, []);

  const requestItem = (item: Item) => {
    fetch(`${API_URL}/items/${item._id}/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "60a9d3f3b4a9c60015f6e2a6",
      })
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  // const data = [
  //   {
  //     id: '1',
  //     user: 'John Doe',
  //     itemImage: require('@/assets/images/recycle.png'),
  //     itemName: 'Item 1',
  //     itemDescription: 'This is item 1 description.',
  //     zipCode: '12345',
  //   },
  //   {
  //     id: '2',
  //     user: 'Jane Smith',
  //     itemImage: require('@/assets/images/recycle.png'),
  //     itemName: 'Item 2',
  //     itemDescription: 'This is item 2 description.',
  //     zipCode: '67890',
  //   },
  //   // Add more items as needed
  // ];

  const renderItem = ({ item }: { item: Item }): JSX.Element => (
    <View style={styles.card}>
      <Text style={styles.userName}>{item.seller?.username}</Text>
      <Image source={{ uri: item.imageUrl}} style={styles.itemImage} />
      <Text style={{ ...styles.itemName, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.zipCode}>{item.seller?.location}</Text>
      <Button mode="contained" onPress={(item) => {

      }}>
        Request Item
        </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={marketData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    marginBottom: 8,
  },
  itemImage: {
    width: 100,
    height: 200,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  zipCode: {
    fontSize: 12,
    color: '#888',
  },
};

export default Marketplace;
