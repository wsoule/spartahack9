import React, { useContext } from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";
import { logoutUser } from "@/auth"
import { AuthContext } from "@/app/authContext";

const Settings = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = async () => {
  const successfulLogout = await logoutUser();
  if(successfulLogout) {
    console.log('Logged out');
    setIsLoggedIn(false);
    router.navigate('/');
  } else {
    alert('Failed to logout.');
  }
}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacy & Safety</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Appearance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acknowledgements</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Suggestions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Support Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutBtn} onPress={async () => await handleLogout()}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#dddddd', // A light grey background
    height: '100%',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#388E3C',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '80%',
    height: 50,
    justifyContent: 'center'
  },
  logoutBtn: {
    marginTop: 30,
    backgroundColor: '#BB0000',
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

export default Settings;
