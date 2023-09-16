import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Home, User } from "@tamagui/lucide-icons";

import TopbarLeftSide from "../../componenets/Topbar/TopbarLeftSide";
import TopbarRigthSide from "../../componenets/Topbar/TopbarRigthSide";

export default () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === "light" ? "#ffff" : "#f4511e",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        title: "",
        headerLeft: () => <TopbarLeftSide />,
        headerRight: () => <TopbarRigthSide />,
        headerLeftContainerStyle: {
          paddingLeft: "3%",
        },
        headerRightContainerStyle: {
          paddingRight: "3%",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
};
