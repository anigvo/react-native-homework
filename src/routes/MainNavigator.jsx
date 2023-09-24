import React from "react";
import { LoginScreen } from "../../src/screens/LoginScreen.jsx";
import { RegistrationScreen } from "../../src/screens/RegistrationScreen.jsx";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
