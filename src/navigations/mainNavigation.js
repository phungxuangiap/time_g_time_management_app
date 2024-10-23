import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/selectors";
import { createContext, useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import { LoadingContext } from "../context/AppContexts";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();
export default function MainNavigation() {
  const { loading, setLoading } = useContext(LoadingContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={loading ? "Welcome" : "Login"}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
