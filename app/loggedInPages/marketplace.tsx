import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { User } from './leaderboard';

export type Item = {
  _id: string;
  name: string;
  count: number;
  seller: User;
  status: 'recycled' | 'sold' | 'trash';
  imageUrl: string;
}

const Marketplace = () => {
  const [marketData, setMarketData] = useState<Item[]>([]); 
  useEffect(() => {
    fetch(`${process.env.API_URL}/list`)
      .then(response => response.json())
      .then(data => {
        setMarketData(data)
      });
  });
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

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.card}>
      <Text style={styles.userName}>{item.seller.username}</Text>
      {/* <Image source={require(item.imageUrl)} style={styles.itemImage} /> */}
      <Text style={{ ...styles.itemName, fontWeight: 'bold' }}>{item.name}</Text>
      {/* <Text style={styles.itemDescription}>{item.itemDescription}</Text> */}
      <Text style={styles.zipCode}>{item.seller.location}</Text>
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
