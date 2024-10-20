import { TextInput } from "react-native";
import componentStyles from "./style/componentStyles";

export const InputTag = function ({ name, onClick }) {
  return (
    <TextInput
      style={componentStyles.inputTag}
      placeholder={name}
      onClick={onClick}
      placeholderTextColor={"#6CDDAB"}
      fontFamily={"Inter-Bold"}
    ></TextInput>
  );
};
