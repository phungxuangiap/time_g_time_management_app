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
import { LoadingContext } from "./src/context/AppContexts";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = useState(true);
  let [fontsLoaded] = useFonts({
    "LondrinaSketch-Regular": require("./src/assets/font/LondrinaSketchRegular.ttf"),
    "Inter-Light": require("./src/assets/font/Inter_18pt-Light.ttf"),
    "Inter-Medium": require("./src/assets/font/Inter_18pt-Medium.ttf"),
    "Inter-Bold": require("./src/assets/font/Inter_18pt-SemiBold.ttf"),
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
