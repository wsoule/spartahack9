import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { uploadImage } from "@/functions/src";

export default function ModalScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera | null>(null);
  const [type, setType] = useState(CameraType.back);

  const requestPermissions = async () => {
    const { status: cameraStatus } =
      await Camera.requestCameraPermissionsAsync();
    const { status: mediaLibraryStatus } =
      await MediaLibrary.requestPermissionsAsync();

    if (cameraStatus !== "granted") {
      Alert.alert(
        "Permission required",
        "Camera access is needed to take pictures"
      );
      return false;
    }

    if (mediaLibraryStatus !== "granted") {
      Alert.alert(
        "Permission required",
        "Access to media library is needed to save pictures"
      );
      return false;
    }

    return true;
  };

  const takePicture = async () => {
    const hasPermission = requestPermissions();

    if (!hasPermission) return;

    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
    }
  };

  const toggleCameraType = () => {
    setType((currentType) =>
      currentType === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const savePhoto = async () => {
    if (!imageUri) return;
    try {
      uploadImage(imageUri);
      setImageUri(null);
    } catch (error) {
      Alert.alert("Error saving photo");
    }
  };

  const handleDelete = () => setImageUri(null);

  return (
    <View style={styles.container}>
      {!imageUri ? (
        <>
          <Text style={styles.title}>Take a photo of your WASTE</Text>
          <Camera style={styles.camera} type={type} ref={cameraRef} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={toggleCameraType}
              style={[styles.button, styles.switchButton]}
            >
              <Text style={styles.text}>Switch Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} style={styles.button}>
              <Text style={styles.text}>Capture</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.fullScreen}>
          <Image source={{ uri: imageUri }} style={styles.fullScreenImage} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleDelete}
              style={[styles.circleButton, styles.deleteButton]}
            >
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={[styles.circleButton, styles.saveButton]}
            >
              <Text style={styles.buttonText}>✔</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    height: "75%",
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    margin: 20,
  },
  switchButton: {
    backgroundColor: "#0077be",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: "100%", // Take up all available width
    height: 300, // Set a fixed height (or you can use aspectRatio)
    resizeMode: "contain", // or 'cover' depending on your preference
  },
  fullScreen: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  circleButton: {
    marginRight: 40,
    marginLeft: 40,
    width: 80,
    bottom: 70,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "red",
  },
  saveButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 30,
  },
});
