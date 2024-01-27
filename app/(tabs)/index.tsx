
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Camera, CameraType } from "expo-camera";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

export default function TabOneScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  
  if (!permission){
    return <View />;
  }
  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text>Grant access to camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button icon="camera" mode="contained" onPress={() => {
        console.log('Pressed')
        toggleCameraType()
      }}>
        Press me
      </Button>
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
