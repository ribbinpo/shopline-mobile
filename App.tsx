import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useColorScheme,
} from "react-native";
import {
  EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { fontConfig } from "./configs/fonts.config";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const themeContainerStyle =
    colorScheme === "light"
      ? {
          backgroundColor: "#d0d0c0",
        }
      : {
          backgroundColor: "#242c40",
        };
  return (
    <View style={[containerStyle(insets), themeContainerStyle]}>
      <Text style={{ fontFamily: "Kanit-Regular" }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  // TODO: font loading in splash screen before open home page
  const [fontsLoaded] = useFonts(fontConfig);
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const containerStyle = (insets: EdgeInsets): ViewStyle => {
  return { flex: 1, paddingTop: insets.top };
};
