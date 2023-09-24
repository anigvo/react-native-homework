import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const HeaderButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <MaterialIcons
        name="logout"
        size={24}
        color="#0000004D"
        marginRight={10}
      />
    </TouchableOpacity>
  );
};
