import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function ModalScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
    }
  };

  const savePhoto = async () => {
    if (!imageUri) return;
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access gallery is required!');
        return;
      }
      await MediaLibrary.createAssetAsync(imageUri);
      Alert.alert('Photo saved successfully!');
      setImageUri(null);
    } catch (error) {
      Alert.alert('Error saving photo');
    }
  };

  const handleDelete = () => setImageUri(null);

  return (
    <View style={styles.container}>
      {!imageUri ? (
        <>
          <Camera style={styles.camera} type={CameraType.back} ref={cameraRef} />
          <TouchableOpacity onPress={takePicture} style={styles.button}>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Image source={{ uri: imageUri }} style={styles.image}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={savePhoto} style={styles.button}>
              <Text style={styles.text}>Save to Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.button}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  camera: {
    height: '75%',
    aspectRatio: 3/4,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 20, 
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: '100%', // Take up all available width
    height: 300, // Set a fixed height (or you can use aspectRatio)
    resizeMode: 'contain', // or 'cover' depending on your preference
  },
});
