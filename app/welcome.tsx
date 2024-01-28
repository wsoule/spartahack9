import { Link } from 'expo-router';
import React from 'react';
import { Alert, Button, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sendDataToServer } from './utils/api';
import { uploadImage } from '@/functions/src';

const WelcomePage: React.FC = () => {
  return (
    <SafeAreaView>    
      <View style={styles.container}>
      <Text style={styles.title}>Welcome to WasteWell!</Text>
      <Text style={styles.subtitle}>
        WasteWell's mission is to make recycling easy and fun. We aim to educate and engage users in sustainable practices through a simple, interactive app that identifies recyclable items with just a photo. Join us in our journey to inspire a greener lifestyle, one piece of trash at a time.
        </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('@/assets/images/recycle.png')}/>
      </View>
      <Link href={'/loginForm'} asChild>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
      style={styles.loginButton}
        onPress={() => {
          Alert.alert('You tapped the SIGN IN button!');
        }}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Link href='/(tabs)' asChild>
        <TouchableOpacity
        style={styles.loginButton}
          onPress={() => {
            console.log('pressed');
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </Link>
      
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', // A light grey background
    height: '100%',
  },
  title: {
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
    padding: 50, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200, // Adjust as per your requirement
    height: 200, // Adjust as per your requirement
    resizeMode: 'cover', // or 'contain' based on your preference
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#4682b4',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '80%',
    height: 50,
    justifyContent: 'center'
  },
  signUpButton: {
    marginTop: 30,
    backgroundColor: '#388E3C',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '80%',
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF', // Text color
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default WelcomePage;
