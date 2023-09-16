import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface IIconButton {
  onPress: () => void;
  icon: JSX.Element;
}

const IconButton = ({ onPress, icon }: IIconButton) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>{icon}</View>
    </TouchableWithoutFeedback>
  );
};

export default IconButton;
