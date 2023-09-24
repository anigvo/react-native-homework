import React from "react";
import { PostsScreen } from "../../src/screens/PostsScreen.jsx";
import { CreatePostsScreen } from "../../src/screens/CreatePostsScreen.jsx";
import { ProfileScreen } from "../../src/screens/ProfileScreen.jsx";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { HeaderButton } from "../components/HeaderButton";

export const BottomNavigator = () => {
  const {
    params: { email },
  } = useRoute();
  const BottomStack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.otf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <BottomStack.Navigator initialRouteName="PostsScreen">
      <BottomStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        initialParams={{ email }}
        options={{
          headerTitle: "Публікації",
          headerStyle: {
            backgroundColor: "#ffffff",
            borderBottomWidth: 1,
            borderBottomColor: "#0000004D",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontSize: 17,
            width: 175,
            textAlign: "center",
            marginLeft: 100,
            marginRight: 60,
            marginTop: 11,
            marginBottom: 11,
            fontFamily: "Roboto-Medium",
          },
          headerLeft: null,
          headerRight: HeaderButton,
        }}
      />
      <BottomStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <BottomStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </BottomStack.Navigator>
  );
};
