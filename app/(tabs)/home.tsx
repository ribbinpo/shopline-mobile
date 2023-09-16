import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, useColorScheme } from "react-native";
import { Button } from "tamagui";

import { Link } from "expo-router";

export default function HomeScreen() {
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
    <View style={[{ flex: 1, paddingTop: 0 }, themeContainerStyle]}>
      <Text style={{ fontFamily: "Kanit-Regular" }}>
        Home
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
      <Button>Lorem ipsum</Button>
      <StatusBar style="auto" />
    </View>
  );
}
