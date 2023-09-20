import { ColorValue, StyleSheet, Text, View } from "react-native";

interface IBadge {
  title: string;
  textColor?: ColorValue;
  backgroundColor?: ColorValue;
  variant?: "default";
  size?: "sm";
}
const variants = {
  default: {
    backgroundColor: "black",
    textColor: "white",
  },
};

const sizes = {
  sm: {
    fontSize: 10
  }
}

const Badge = ({ title, variant, backgroundColor, textColor, size }: IBadge) => {
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
          ...sizes[size ? size : "sm"],
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export { Badge };
