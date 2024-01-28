// // HomeLayout.js
// import { Link, Stack } from 'expo-router';
// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';

// const HomeLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
//   const navigation = useNavigation();

//   navigation.setOptions({
//     headerShown: true,
//     title: 'Home'
//     });
//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack>
//         <Stack.Screen name="cameraModal" options={{ presentation: "modal" }} />
//       </Stack>
//       <Text>Welcome to my app!</Text>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{title}</Text>
//       </View>
//       <View style={styles.content}>
//         {children}
//       </View>
      // <View style={styles.footer}>
      //   <Link href="/loggedInPages/cameraModal" asChild>
      //     <TouchableOpacity style={styles.iconContainer}>
      //       <FontAwesome name="camera" size={24} color="white" />
      //       <Text style={styles.footerText}>Picture</Text>
      //     </TouchableOpacity>
      //   </Link>
      //   <Link href="/welcome" asChild>
      //     <TouchableOpacity style={styles.iconContainer}>
      //       <FontAwesome name="home" size={24} color="white" />
      //       <Text style={styles.footerText}>Home</Text>
      //     </TouchableOpacity>
      //   </Link>
      //   <Link href="/loggedInPages/leaderboard" asChild>
      //     <TouchableOpacity style={styles.iconContainer}>
      //       <FontAwesome name="trophy" size={24} color="white" />
      //       <Text style={styles.footerText}>Leaderboard</Text>
      //     </TouchableOpacity>
      //   </Link>
      // </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#007bff',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   content: {
//     flex: 1,
//     padding: 10,
//     // Add additional styling for the content area if needed
//   },
//   footer: {
//     flexDirection: 'row',
//     bottom: -575,
//     height: 50,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: '#6c757d',
//   },
//   footerText: {
//     textAlign: 'center',
//     color: '#fff',
//     marginTop: 5,
//   },
//   iconContainer: {
//     alignItems: 'center', // Center-align items within the container
//   },
// });

// export default HomeLayout;
