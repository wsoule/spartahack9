import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { router } from 'expo-router';

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Camera, CameraType } from "expo-camera";

export default function ModalScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [galleryPermission, requestGalleryPermission] = MediaLibrary.usePermissions();
  const [savedPhotoUri, setSavedPhotoUri] = useState<string | undefined>(undefined);
  const cameraRef = useRef<Camera>(null);

  async function takePicture() {
    const photo = await cameraRef.current?.takePictureAsync();
    console.log(photo);
    savePhoto(photo?.uri);
  }
  
  async function savePhoto(photoUri?: string) {
    if (!photoUri) {
      return;
    }
    const asset = await MediaLibrary.createAssetAsync(photoUri);
    const album = await MediaLibrary.getAlbumAsync("Expo");
    if (album) {
      await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      
    } else {
      await MediaLibrary.createAlbumAsync("Expo", asset, false);
    }
  // cameraRef.current?.pausePreview();
    router.push(`/photo/${asset.uri}`);
    return asset.uri;
  }

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
  if (!galleryPermission?.granted) {
    return (
      <View style={styles.container}>
        <Text>No access to gallery</Text>
        <TouchableOpacity onPress={requestGalleryPermission} style={styles.button}>
          <Text>Grant access to gallery</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
      </Camera>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
          <Text style={styles.text}>Flip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.button}>
          <Text style={styles.text}>Snap</Text>
        </TouchableOpacity> 
        </View>
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

});
