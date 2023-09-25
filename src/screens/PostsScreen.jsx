import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Status } from "../components/Status";
import BlankAvatarImg from "../assets/images/avatar.png";
import BlankPostImg from "../assets/images/forest.png";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
    <ScrollView style={styles.container}>
      <Status />
      <View style={styles.user}>
        <Image source={BlankAvatarImg} style={styles.userImage} />
        <View style={styles.userInfoWrap}>
          <Text style={styles.userTextName}>Name</Text>
          <Text style={styles.userTextEmail}>{email}</Text>
        </View>
      </View>

      <View style={styles.postList}>
        <View style={styles.post}>
          <Image source={BlankPostImg} style={styles.postImage} />
          <Text style={styles.postName}>Ліс</Text>
          <View style={styles.postInteraction}>
            <View style={[styles.postWrap, styles.postComment]}>
              <MaterialCommunityIcons
                name="message-reply-outline"
                size={24}
                style={styles.postIcon}
              />
              <Text style={styles.postCommentText}>0</Text>
            </View>
            <View style={[styles.postWrap, styles.postLocation]}>
              <Ionicons
                name="location-outline"
                size={24}
                style={styles.postIcon}
              />
              <Text style={styles.postLocationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.post}>
          <Image source={BlankPostImg} style={styles.postImage} />
          <Text style={styles.postName}>Ліс</Text>
          <View style={styles.postInteraction}>
            <View style={[styles.postWrap, styles.postComment]}>
              <MaterialCommunityIcons
                name="message-reply-outline"
                size={24}
                style={styles.postIcon}
              />
              <Text style={styles.postCommentText}>0</Text>
            </View>
            <View style={[styles.postWrap, styles.postLocation]}>
              <Ionicons
                name="location-outline"
                size={24}
                style={styles.postIcon}
              />
              <Text style={styles.postLocationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
  postList: {},
  post: { marginBottom: 32 },
  postImage: {
    height: 240,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0000004D",
    marginBottom: 8,
    width: "100%",
  },
  postName: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 8,
  },
  postInteraction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  postIcon: { marginRight: 5, color: "#0000004D" },
  postComment: {},
  postLocation: {},
  postCommentText: {
    flexWrap: "wrap",
    color: "#0000004D",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  postLocationText: {
    flexWrap: "wrap",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#0000004D",
  },
});
