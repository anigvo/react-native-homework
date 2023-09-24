import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Status } from "../components/Status";
import BlankImg from "../assets/images/blank-black.png";
import { useFonts } from "expo-font";

export const PostsScreen = () => {
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
    <View style={styles.container}>
      <Status />
      <View style={styles.user}>
        <Image source={BlankImg} style={styles.userImage} />
        <View style={styles.userInfoWrap}>
          <Text style={styles.userTextName}>Name</Text>
          <Text style={styles.userTextEmail}>Email</Text>
        </View>
      </View>

      <View>
        <Text>Posts</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 8,
  },
  userInfoWrap: {},
  userTextName: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 13,
  },
  userTextEmail: {
    color: "#212121CC",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
});
