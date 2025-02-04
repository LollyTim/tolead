import { NavigationContainer } from '@react-navigation/native';
import { Slot, Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from "@/utils/cache";
import { LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen"

import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from "@expo-google-fonts/dm-sans"
import { useEffect } from 'react';

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!clerkPublishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

LogBox.ignoreLogs(['Clerk: Clerk has been loaded with development keys'])
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const [fontLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
  });


  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontLoaded])
  return (
    <Slot />
  )
}

export default function RootLayout() {


  return (
    // <NavigationContainer>
    <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
    // </NavigationContainer>
  )
}