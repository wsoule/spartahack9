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
  const [userId, setUserId] = useState<string | null>('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve user ID from AsyncStorage
        const storedUserId = await AsyncStorage.getItem('Id');
        setUserId(storedUserId);

        // Fetch market data
        const response = await fetch(`${API_URL}/items`);
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);
  const requestItem =  (item: Item) => {
    const seller = item;

    console.log('item = ', item);
    fetch(`${API_URL}/update-item/${item._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: item.seller._id,
        status: 'taken',
        buyerId: userId
      })
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  const renderItem = ({ item }: { item: Item }): JSX.Element => (
    <View style={styles.card}>
      <Text style={styles.userName}>{item.seller?.username}</Text>
      <Image source={{ uri: item.imageUrl}} style={styles.itemImage} />
      <Text style={{ ...styles.itemName, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.zipCode}>{item.seller?.location}</Text>
      <Button mode="contained" onPress={() => {
        requestItem(item);
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