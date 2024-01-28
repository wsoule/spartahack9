// HomePage.js
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = () => {
  const username = "John Doe"; // Replace with your own name
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text>Welcome to the Homepage!</Text>
          {/* Add more content or components here */}
        </View>
        <View style={styles.footer}>
          <Link href="/loggedInPages/cameraModal" asChild>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome name="camera" size={24} style={styles.cameraIcon} />
              <Text style={styles.footerText}>Picture</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/loggedInPages/marketplace" asChild>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome
                name="shopping-bag"
                size={24}
                style={styles.shoppingBagIcon}
              />
              <Text style={styles.footerText}>Market</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/loggedInPages/leaderboard" asChild>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome name="trophy" size={24} style={styles.trophyIcon} />
              <Text style={styles.footerText}>Leaderboard</Text>
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
    paddingVertical: 10,
  },
  footerText: {
    textAlign: "center",
    color: "#388E3C",
    marginTop: 3,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 100,
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
});

export default HomePage;
