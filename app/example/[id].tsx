import { Stack, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  const { slug } = useGlobalSearchParams();

  console.log(slug);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Example",
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Text>Exmaple # {slug}</Text>
    </View>
  );
}
