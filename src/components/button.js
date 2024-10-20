import { Text, TouchableOpacity } from "react-native";
import componentStyles from "./style/componentStyles";

const CommonButton = function ({ title, style }) {
  return (
    <TouchableOpacity style={style}>
      <Text style={{ fontSize: 18, color: "#fff", fontWeight: 600 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export { CommonButton };
