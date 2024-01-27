import React from 'react';
import { Alert, Button, Text, View, StyleSheet, Image } from 'react-native';

const WelcomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to WasteWell!</Text>
      <Text style={styles.subtitle}>Please sign in or sign up to get started.</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('@/assets/images/recycle.png')}/>
      </View>
      <Button
        title='Sign In'
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        color='#007BFF' // You can choose a color that matches your app theme
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', // A light grey background
    height: '100%'
  },
  title: {
    top: -200,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#388E3C', // Darker text for better readability
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555', // Slightly lighter text for the subtitle
  },
  imageContainer: {
    backgroundColor: '#607D8B', // Replace with your dark color
    borderRadius: 100, // Adjust for blob-like shape
    borderBottomEndRadius: 20, // To cut the top-right border
    padding: 50, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200, // Adjust as per your requirement
    height: 200, // Adjust as per your requirement
    resizeMode: 'cover', // or 'contain' based on your preference
  }
});

export default WelcomePage;
