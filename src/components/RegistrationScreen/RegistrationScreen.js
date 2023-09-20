import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import AddIcon from "../../assets/icons/addIcon";
import BackgroundImage from "../../assets/images/background-image.png";
import BlankImg from "../../assets/images/blank-black.png";

export default function RegistrationScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={BackgroundImage}
        style={styles.background}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <KeyboardAvoidingView style={styles.wrap} behavior="padding">
          <View style={styles.imgContainer}>
            <View style={styles.imgWrap}>
              <Image source={BlankImg} style={styles.img} />
              <TouchableOpacity style={styles.iconButton}>
                <AddIcon style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.h1}>Реєстрація</Text>

            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />

            <View style={styles.passwordWrap}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.showButton}
              >
                <Text style={styles.showButtonText}>
                  {showPassword ? "Скрити" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.submitContainer}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.redirectLink}>Вже є акаунт? Увійти</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  wrap: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "66%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  h1: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 24,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  imgWrap: { position: "relative", bottom: 60 },
  img: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  icon: {
    width: 25,
    height: 25,
    fill: "#FF6C00",
  },
  iconButton: {
    position: "absolute",
    right: -16,
    bottom: 10,
  },
  formContainer: {
    flexDirection: "column",
    position: "relative",
    bottom: 60,
  },
  input: {
    height: 50,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  passwordWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  showButton: {
    position: "absolute",
    paddingRight: 16,
    right: 16,
  },
  showButtonText: {
    color: "#1B4371",
  },
  submitContainer: {
    flexDirection: "column",
    position: "relative",
    bottom: 60,
  },
  submitButton: {
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 30,
    marginTop: 35,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  submitButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  redirectLink: { textAlign: "center" },
});
