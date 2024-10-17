import { View } from "react-native";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors";
import { useState } from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import Logo from "../../components/logo";
import { AppContainerStyle } from "./style";

export default function AppContainer() {
  const [loading, setLoading] = useState(true);
  const authState = useSelector(authSelector);
  return (
    <View style={AppContainerStyle}>
      {loading && (
        <WelcomeScreen>
          <Logo></Logo>
        </WelcomeScreen>
      )}
    </View>
  );
}
