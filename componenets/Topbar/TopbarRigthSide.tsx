import { useRouter } from "expo-router";
import { View, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import IconButton from "../base/IconButton";

const TopbarRigthSide = () => {
  const router = useRouter();
  return (
    <View style={{ flexDirection: "row", gap: "12%" } as unknown as ViewStyle}>
      <IconButton
        onPress={() => router.push("/search")}
        icon={<Ionicons name="search" color="black" size={20} />}
      />
      <IconButton
        onPress={() => router.push("/notification")}
        icon={<Ionicons name="notifications" color="black" size={20} />}
      />
    </View>
  );
};

export default TopbarRigthSide;
