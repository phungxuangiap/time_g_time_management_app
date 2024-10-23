import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { InputTag } from "../../components/inputTag";
import componentStyles from "../../components/style/componentStyles";
import { CommonButton } from "../../components/button";
import { LogoSocial } from "../../components/logo";
import { SpacerHorizontal24 } from "../../components/spacer";
import { LoginScreenStyle } from "./style";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={LoginScreenStyle.bigTitleText}>Login</Text>
      <InputTag name={"User name"} />
      <InputTag name={"Password"} />
      <CommonButton title={"Login"} style={LoginScreenStyle.buttonDistance} />
      <Text style={LoginScreenStyle.textConcat}>Or</Text>
      <View style={LoginScreenStyle.container}>
        <LogoSocial
          socialDirection={require("../../assets/image/googleLogo.png")}
        />
        <SpacerHorizontal24 />
        <LogoSocial
          socialDirection={require("../../assets/image/facebook.png")}
        />
      </View>
      <View style={{ ...LoginScreenStyle.container, padding: 20 }}>
        <Text style={componentStyles.text18}>Haven't had account yet?</Text>
        <Text style={LoginScreenStyle.greenText}>Register</Text>
      </View>
    </View>
  );
}
