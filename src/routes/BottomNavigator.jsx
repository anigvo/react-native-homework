import React from "react";
import { PostsScreen } from "../../src/screens/PostsScreen.jsx";
import { CreatePostsScreen } from "../../src/screens/CreatePostsScreen.jsx";
import { ProfileScreen } from "../../src/screens/ProfileScreen.jsx";
import { useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { HeaderButton, HeaderLeftButton } from "../components/HeaderButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const headerOptions = (title, showLogOutButton, showLeftButton) => ({
  headerTitle: title,
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#0000004D",
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontSize: 17,
    width: "100%",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  headerLeft: showLeftButton ? HeaderLeftButton : null,
  headerRight: showLogOutButton ? HeaderButton : null,
});

export const BottomNavigator = () => {
  const {
    params: { email },
  } = useRoute();
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.otf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = focused ? "appstore1" : "appstore-o";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "plussquare" : "plussquareo";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "user-alt" : "user";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#0000004D",
        tabBarStyle: [
          {
            display: "flex",
            height: 60,
            borderTopWidth: 1,
            borderTopColor: "#0000004D",
          },
          null,
        ],
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        initialParams={{ email }}
        options={headerOptions("Публікації", true, false)}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={headerOptions("Створити публікацію", false, true)}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={headerOptions("Профіль", true, false)}
      />
    </Tabs.Navigator>
  );
};
