// HomePage.js
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const HomePage = () => {
  const username = 'John Doe'; // Replace with your own name
  return (
    <>
      <View style={styles.mainContent}>
        <Text>Welcome to the Homepage!</Text>
        {/* Add more content or components here */}
      </View>
      <View style={styles.footer}>
        <Link href="/loggedInPages/cameraModal" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome name="camera" size={24} color="white" />
            <Text style={styles.footerText}>Picture</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/loggedInPages/marketplace" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome name="shopping-bag" size={24} color="white" />
            <Text style={styles.footerText}>Market</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/loggedInPages/leaderboard" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome name="trophy" size={24} color="white" />
            <Text style={styles.footerText}>Leaderboard</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  mainContent: {
    // Add styles for your main content area
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 10,
    // Add additional styling for the content area if needed
  },
  footer: {
    flexDirection: 'row',
    bottom: -575,
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#6c757d',
  },
  footerText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 5,
  },
  iconContainer: {
    alignItems: 'center', // Center-align items within the container
  },
});

export default HomePage;
