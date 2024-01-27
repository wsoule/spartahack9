import React from "react";
import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import { Link } from "expo-router";
import { Button } from "react-native-paper";

export default function TabOneScreen() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
        <Link href="/" replace >
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx thing" /> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
