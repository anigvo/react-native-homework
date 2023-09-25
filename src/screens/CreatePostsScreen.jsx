import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Status } from "../components/Status";
import { Feather } from "@expo/vector-icons";
import { pickImage } from "../utils/imagePicker";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  const [image, setImage] = useState(null);
  const [imgName, setImgName] = useState("");
  const [imgLocation, setImgLocation] = useState("");

  const imageUpload = async () => {
    const imageUri = await pickImage();
    setImage(null);
    if (imageUri) {
      setImage(imageUri);
    }
  };
  const navigation = useNavigation();
  const onSubmit = () => {
    if (imgName.trim() === "" || imgLocation.trim() === "" || !image) {
      alert("Заповніть усі поля та завантажте зображення");
      return;
    }
    console.log({ imgName, imgLocation, image });

    navigation.navigate("PostsScreen", {
      screen: "PostsScreen",
      params: { imgName, imgLocation, image },
    });
    setImage(null);
    setImgName("");
    setImgLocation("");
  };
  const onDelete = () => {
    setImage(null);
    setImgName("");
    setImgLocation("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
        keyboardVerticalOffset={0}
      >
        <Status />
        <View style={styles.imgContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.img} />
          ) : (
            <View style={styles.img} />
          )}

          {!image ? (
            <TouchableOpacity
              style={[styles.iconNotLoaded, styles.icon]}
              title="Завантажте фото"
              onPress={imageUpload}
            >
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.iconLoaded, styles.icon]}
              onPress={imageUpload}
            >
              <MaterialIcons name="photo-camera" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
        {image ? (
          <Text style={styles.imgText}>Редагувати фото</Text>
        ) : (
          <Text style={styles.imgText}>Завантажте фото</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          value={imgName}
          onChangeText={setImgName}
        />

        <View style={styles.locationWrap}>
          <TextInput
            style={[styles.input, styles.locationInput]}
            placeholder="Місцевість..."
            value={imgLocation}
            onChangeText={setImgLocation}
          />
          <Ionicons
            name="location-outline"
            size={24}
            style={styles.locationIcon}
          />
        </View>
        {imgName.trim() === "" || imgLocation.trim() === "" || !image ? (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={onSubmit}
            disabled={true}
          >
            <Text style={styles.submitButtonText}>Опубліковати</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.submitButton, styles.submitButtonActive]}
            onPress={onSubmit}
            disabled={false}
          >
            <Text
              style={[styles.submitButtonText, styles.submitButtonTextActive]}
            >
              Опубліковати
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Feather name="trash-2" size={24} style={styles.deleteIcon} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
  imgContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  img: {
    width: "100%",
    height: "100 %",
    borderRadius: 10,
  },
  icon: {
    borderRadius: 50,
    width: 60,
    height: 60,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  iconNotLoaded: {
    backgroundColor: "#FFFFFF",
  },
  iconLoaded: {
    backgroundColor: "#FFFFFF4D",
  },
  input: {
    height: 50,
    marginTop: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#FFFFFF",
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  imgText: {
    marginBottom: 32,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  locationIcon: {
    position: "absolute",
    bottom: 22,
    left: 12,
    color: "#BDBDBD",
  },
  locationInput: { paddingLeft: 40 },
  submitButton: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    marginTop: 24,
    marginBottom: 16,
  },
  submitButtonActive: { backgroundColor: "#FF6C00" },
  submitButtonText: {
    textAlign: "center",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  submitButtonTextActive: { color: "#FFFFFF" },

  deleteButton: {
    marginTop: 24,
    width: 70,
    height: 40,
    padding: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    marginBottom: 16,
    alignSelf: "center",
  },
  deleteIcon: {
    color: "#BDBDBD",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
