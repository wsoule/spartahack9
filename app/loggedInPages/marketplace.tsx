import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { User } from './leaderboard';
import { API_URL } from '../_layout';
import { Button, Card, Chip } from 'react-native-paper';
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
    <>
<Card style={{ margin: 20 }}>
  <Card.Title title={item.name} subtitle={item.description} style={styles.itemName}/>
  <Card.Cover source={{ uri: item.imageUrl }} />
  <Card.Content>
    <Text style={{ ...styles.zipCode, fontWeight: 'bold' }}>Zip Code: {item.seller?.location}</Text>
    
    {/* Use ScrollView with horizontal scrolling for the Chips */}
    <ScrollView horizontal style={{ flexDirection: 'row', marginTop: 5 }}>
      {/* Map over item.tags and render a Chip for each tag */}
      {item.tags.map((tag, index) => (
        <Chip key={index} style={{ margin: 5, backgroundColor: '#81C784' }}>
          {tag}
        </Chip>
      ))}
    </ScrollView>
  </Card.Content>
  
  {/* Action buttons */}
  <Card.Actions>
    <Button buttonColor='#4CAF50' mode="contained" onPress={() => requestItem(item)}>
      Request Item
    </Button>
  </Card.Actions>
</Card>

   
    </>

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
    backgroundColor: '#9E9E9E'
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
    width: 80,
    height: 200,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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
