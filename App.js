import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainNavigator } from "./src/routes/MainNavigator";
import { BottomNavigator } from "./src/routes/BottomNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Bottom" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
