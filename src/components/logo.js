import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from "react-native";
import componentStyles from "./style/componentStyles";
import { useEffect, useRef } from "react";

export const Logo = function ({ loading }) {
  const logoPadding = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoPadding, {
          toValue: 20,
          duration: 1000,
          easing: Easing.bounce,
          useNativeDriver: false,
        }),
        Animated.timing(logoPadding, {
          toValue: 0,
          duration: 500,
          easing: Easing.bezier(0.05, 0.14, 0.3, 0.72),
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.Image
      source={require("../../assets/logo.png")}
      style={{
        ...componentStyles.logo,
        transform: [{ translateY: logoPadding }],
      }}
    ></Animated.Image>
  );
};

export const LogoSocial = function ({ socialDirection }) {
  return (
    <TouchableOpacity style={{ alignSelf: "baseline" }}>
      <Image source={socialDirection} style={componentStyles.logoSocial} />
    </TouchableOpacity>
  );
};
