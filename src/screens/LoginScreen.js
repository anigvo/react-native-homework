import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import BackgroundImage from "../assets/images/background-image.png";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    login: false,
    email: false,
    password: false,
  });

  const handleFocus = (inputName) => {
    setIsFocused({ ...isFocused, [inputName]: true });
  };

  const handleBlur = (inputName) => {
    setIsFocused({ ...isFocused, [inputName]: false });
  };

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
        <View style={styles.wrap}>
          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior="padding"
            enabled
          >
            <Text style={styles.h1}>Увійти</Text>

            <TextInput
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              style={[styles.input, isFocused.email && styles.focusedInput]}
              placeholder="Адреса електронної пошти"
            />

            <View style={styles.passwordWrap}>
              <TextInput
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                style={[
                  styles.input,
                  { flex: 1 },
                  isFocused.password && styles.focusedInput,
                ]}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
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
          </KeyboardAvoidingView>

          <View style={styles.submitContainer}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.redirectLink}>
              Немає акаунту? Зареєструватися
            </Text>
          </View>
        </View>
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
    justifyContent: "center",
  },
  wrap: {
    flex: 1,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "66%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  h1: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 24,
  },
  formContainer: {
    flexDirection: "column",
  },
  input: {
    height: 50,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
  passwordWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  showButton: {
    position: "absolute",
    right: 16,
  },
  showButtonText: {
    color: "#1B4371",
  },
  submitContainer: {
    flexDirection: "column",
  },
  submitButton: {
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 30,
    marginTop: 35,
    marginBottom: 16,
  },
  submitButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  redirectLink: { textAlign: "center", color: "#1B4371" },
});
