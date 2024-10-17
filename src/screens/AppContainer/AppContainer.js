import { View } from "react-native";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors";
import { useState } from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import Logo from "../../components/logo";
import { AppContainerStyle } from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../LoginScreen/LoginScreen";
import MainNavigation from "../../navigations/mainNavigation";

export default function AppContainer() {
  return (
    <View style={AppContainerStyle}>
      <MainNavigation />
    </View>
  );
}
