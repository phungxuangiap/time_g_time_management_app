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
import { RegisterScreenStyle } from "./style";

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={RegisterScreenStyle.bigTitleText}>Register</Text>
      <InputTag name={"User name"} />
      <InputTag name={"Password"} />
      <InputTag name={"Email"} />
      <CommonButton
        title={"Register"}
        style={RegisterScreenStyle.buttonDistance}
      />
      <View style={{ ...RegisterScreenStyle.container, padding: 20 }}>
        <Text style={componentStyles.text18}>Aready have account?</Text>
        <Text style={RegisterScreenStyle.greenText}>Login</Text>
      </View>
    </View>
  );
}
