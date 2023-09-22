import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BackgroundImage from "../assets/images/background-image.png";
import BlankImg from "../assets/images/blank-black.png";
import { pickImage } from "../utils/imagePicker";
import { LoginAndRegStyles } from "./LoginAndRegStyles";

const styles = StyleSheet.create(LoginAndRegStyles);

export default function RegistrationScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
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

  const imageUpload = async () => {
    const imageUri = await pickImage();
    if (imageUri) {
      setImage(imageUri);
    }
  };
  const cancelImage = () => {
    setImage(null);
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
        <View style={[styles.wrap, styles.wrapReg]}>
          <View style={styles.imgContainer}>
            <View style={styles.imgWrap}>
              {image ? (
                <Image source={{ uri: image }} style={styles.img} />
              ) : (
                <Image source={BlankImg} style={styles.img} />
              )}

              {!image ? (
                <TouchableOpacity
                  style={styles.iconButton}
                  title="Оберіть аватарку"
                  onPress={imageUpload}
                >
                  <AntDesign name="pluscircle" size={25} color="#FF6C00" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={cancelImage}
                >
                  <AntDesign name="closecircle" size={25} color="#E8E8E8" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.h1}>Реєстрація</Text>

            <TextInput
              onFocus={() => handleFocus("login")}
              onBlur={() => handleBlur("login")}
              style={[styles.input, isFocused.login && styles.focusedInput]}
              placeholder="Логін"
            />
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
              <Text style={styles.submitButtonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.redirectLink}>Вже є акаунт? Увійти</Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
