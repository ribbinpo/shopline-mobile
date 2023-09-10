import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={containerStyle(insets)}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const containerStyle = (insets: EdgeInsets): ViewStyle => {
  return { flex: 1, paddingTop: insets.top  };
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
