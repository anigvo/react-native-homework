import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
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

export const HeaderLeftButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Feather name="arrow-left" size={24} color="#212121" marginLeft={10} />
    </TouchableOpacity>
  );
};
