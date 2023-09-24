import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BlankImg from "../assets/images/blank-black.png";
import { pickImage } from "../utils/imagePicker";
import { useFonts } from "expo-font";

export const Form = ({
  registration = true,
  title,
  buttonText,
  linkText,
  nav,
}) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    login: false,
    email: false,
    password: false,
  });
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.otf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const cancelImage = () => {
    setImage(null);
  };

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

  const onSubmit = () => {
    if (registration) {
      if (
        login.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        !image
      ) {
        alert("Заповніть усі поля форми та завантажте аватарку");
        return;
      }
      console.log({ login, email, password, image });
    } else {
      if (email.trim() === "" || password.trim() === "") {
        alert("Заповніть усі поля форми");
        return;
      }
      console.log({ email, password });
    }
    navigation.navigate("Bottom", {
      screen: "PostsScreen",
      params: { email },
    });
    setLogin("");
    setEmail("");
    setPassword("");
    setImage(null);
  };

  return (
    <>
      {registration && (
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
              <TouchableOpacity style={styles.iconButton} onPress={cancelImage}>
                <AntDesign name="closecircle" size={25} color="#E8E8E8" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
      <View style={styles.formContainer}>
        <Text style={styles.h1}>{title}</Text>

        {registration && (
          <TextInput
            onFocus={() => handleFocus("login")}
            onBlur={() => handleBlur("login")}
            style={[styles.input, isFocused.login && styles.focusedInput]}
            placeholder="Логін"
            value={login}
            onChangeText={setLogin}
          />
        )}

        <TextInput
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          style={[styles.input, isFocused.email && styles.focusedInput]}
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={setEmail}
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
            onChangeText={setPassword}
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
        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nav}>
          <Text style={styles.redirectLink}>{linkText}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 24,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  redirectLink: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  imgWrap: { position: "relative", bottom: 0 },
  img: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  iconButton: {
    position: "absolute",
    right: -12.5,
    bottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
});
