import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";

import { fontConfig } from "../configs/fonts.config";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [fontsLoaded, fontError] = useFonts(fontConfig);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
