import { View, StyleSheet } from "react-native";
import styles from "./style";
import { Logo } from "../../components/logo";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/AppContexts";

function WelcomeScreen({ navigation }) {
  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      if (loading) {
        setLoading(false);
        navigation.navigate("Login");
      }
    }, 3000);
  }, []);
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo></Logo>
    </View>
  );
}
export default WelcomeScreen;
