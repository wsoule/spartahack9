import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PhotoScreen() {
  const { uri } = useLocalSearchParams();
  if (!uri) {
    return null;
  }
  if (typeof uri !== "string") {
    return null;
  }
  console.log('uri = ', uri);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photo</Text>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});