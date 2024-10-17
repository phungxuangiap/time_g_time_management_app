import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import Logo from "./src/components/logo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import GlobalStateProvider from "./src/context/AuthContext";
import { Provider, useSelector } from "react-redux";
import AppContainer from "./src/screens/AppContainer/AppContainer";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();
export const LoadingContext = createContext(null);
export default function App() {
  const [loading, setLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    "LondrinaSketch-Regular": require("./src/assets/font/LondrinaSketchRegular.ttf"),
  });
  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <AppContainer></AppContainer>
      </LoadingContext.Provider>
    </Provider>
  );
}
