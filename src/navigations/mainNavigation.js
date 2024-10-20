import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/selectors";
import { createContext, useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator();
export const LoadingContext = createContext(null);
export default function MainNavigation() {
  const [loading, setLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
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
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoadingContext.Provider>
  );
}
