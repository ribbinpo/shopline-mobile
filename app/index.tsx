import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, ViewStyle, useColorScheme } from "react-native";
import {
  EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Link } from "expo-router";

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
      <Link href="/example" asChild>
        <Pressable>
          <Text>Example</Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "/example/[id]",
          params: { id: "1" },
        }}
      >
        Example #1
      </Link>
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
  return { flex: 1, paddingTop: insets.top };
};
