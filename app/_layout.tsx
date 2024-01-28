import React, { useEffect} from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/components/useColorScheme";
import { PaperProvider } from "react-native-paper";

// Authentication
import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from '../firebaseConfig'
import { logoutUser } from "@/auth";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Authentication listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (user: any) => {
      if (user) {
        // User is signed in
        // Handle user state
      } else {
        // User not signed in
        // handle user state
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider  theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="welcome"
          options={{ headerShown: false, title: "Welcome" }}
        />
      </Stack>
    </ThemeProvider>
    </PaperProvider>
  );
}
