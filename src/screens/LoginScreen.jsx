import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import BackgroundImage from "../assets/images/background-image.png";
import { LoginAndRegStyles } from "./LoginAndRegStyles";
const styles = StyleSheet.create(LoginAndRegStyles);

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled
      keyboardVerticalOffset={-132}
    >
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
        <View style={[styles.wrap, styles.wrapLogin]}>
          <View style={styles.formContainer}>
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
          </View>

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
    </KeyboardAvoidingView>
  );
}
