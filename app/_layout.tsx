import { useEffect } from "react";
import { useColorScheme, View } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";

import fontConfig from "../configs/fonts.config";
import tamaConfig from "../configs/tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [fontsLoaded, fontError] = useFonts(fontConfig);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <TamaguiProvider config={tamaConfig}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "light" ? "#ffff" : "#f4511e",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ title: "Search" }} />
        <Stack.Screen name="notification" options={{ title: "Notification" }} />
      </Stack>
    </TamaguiProvider>
  );
}
