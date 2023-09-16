import { useRouter } from "expo-router";
import { View, ViewStyle } from "react-native";
import { Search, Bell } from "@tamagui/lucide-icons";

import IconButton from "../base/IconButton";

const TopbarRigthSide = () => {
  const router = useRouter();
  return (
    <View style={{ flexDirection: "row", gap: "12%" } as unknown as ViewStyle}>
      <IconButton
        onPress={() => router.push("/search")}
        icon={<Search color="black" />}
      />
      <IconButton
        onPress={() => router.push("/notification")}
        icon={<Bell color="black" />}
      />
    </View>
  );
};

export default TopbarRigthSide;
