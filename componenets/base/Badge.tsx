import { ColorValue, StyleSheet, Text, View } from "react-native";

interface IBadge {
  title: string;
  textColor?: ColorValue;
  backgroundColor?: ColorValue;
  variant?: "default";
}
const variants = {
  default: {
    backgroundColor: "black",
    textColor: "white",
  },
};

const Badge = ({ title, variant, backgroundColor, textColor }: IBadge) => {
  return (
    <View
      style={{
        borderRadius: 100,
        padding: 5,
        backgroundColor: backgroundColor
          ? backgroundColor
          : variants[variant ? variant : "default"].backgroundColor,
      }}
    >
      <Text
        style={{
          color: textColor
            ? textColor
            : variants[variant ? variant : "default"].textColor,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export { Badge };

const style = StyleSheet.create({
  container: {
    borderRadius: 1,
  },
});
