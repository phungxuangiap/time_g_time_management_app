import { View, StyleSheet } from "react-native";
import styles from "./style/welcome";

function WelcomeScreen({ children }) {
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}
export default WelcomeScreen;
