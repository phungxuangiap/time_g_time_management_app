import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Logo from "./src/components/logo";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    loading && (
      <WelcomeScreen>
        <Logo />
      </WelcomeScreen>
    )
  );
}
