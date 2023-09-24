import { ImageBackground, StyleSheet } from "react-native";
import BackgroundImage from "../assets/images/background-image.png";

export const Background = (props) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={BackgroundImage}
      style={styles.background}
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
});
