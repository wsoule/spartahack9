// HomePage.js
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = () => {
  const username = "John Doe"; // Replace with your own name
  const points = 12;
  return (
    <>   
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <TouchableOpacity style={styles.friendsBtn} onPress={() => router.navigate('/loggedInPaged/friends')}>
            <Text style={styles.points}>Friends</Text>
          </TouchableOpacity>
          <Text style={styles.username}>Username: {username}</Text>
          <Text style={styles.points}>Points Earned: {points}</Text>
        </View>
        <View style={styles.footer}>
          <Link href="/loggedInPages/cameraModal" asChild>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome name="camera" size={35} style={styles.cameraIcon} />
              {/* <Text style={styles.footerText}>Picture</Text> */}
            </TouchableOpacity>
          </Link>
          <Link href="/loggedInPages/marketplace" asChild>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome
                name="shopping-bag"
                size={35}
                style={styles.shoppingBagIcon}
              />
              {/* <Text style={styles.footerText}>Market</Text> */}
            </TouchableOpacity>
          </Link>
          <Link href="/loggedInPages/leaderboard" asChild>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome name="trophy" size={35} style={styles.trophyIcon} />
              {/* <Text style={styles.footerText}>Points</Text> */}
            </TouchableOpacity>
          </Link>
          <Link href="/loggedInPages/settings" asChild>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome name="gear" size={35} style={styles.gearIcon} />
              {/* <Text style={styles.footerText}>Settings</Text> */}
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    // Add styles for your main content area
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00A36C",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00A36C",
  },
  headerText: {
    color: "#00A36C",
    fontSize: 0,
  },
  content: {
    flex: 1,
    padding: 0,
    // Add additional styling for the content area if needed
  },
  footer: {
    flexDirection: "row",
    bottom: -600,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#81C784",
    paddingVertical: 16,
  },
  footerText: {
    textAlign: "center",
    color: "#388E3C",
    marginTop: 0,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#F5F5F5", // Center-align items within the container
  },
  cameraIcon: {
    color: "#4CAF50",
  },
  shoppingBagIcon: {
    color: "#4CAF50",
  },
  trophyIcon: {
    color: "#4CAF50",
  },
  gearIcon: {
    color: "#4CAF50",
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  points: {
    fontSize: 18,
    marginBottom: 20,
  },
  friendsBtn: {
    marginTop: 30,
    backgroundColor: '#4682b4',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '20%',
    height: '10%',
    justifyContent: 'center'
  }
});

export default HomePage;
