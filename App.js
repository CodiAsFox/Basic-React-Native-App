import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import DetailsScreen from "./screens/Details";
import { StatusBar } from "react-native";
import ListScreen from "./screens/List";
import HomeScreen from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  StatusBar.setBarStyle("light-content", true);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Home",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="List"
              component={ListScreen}
              options={{
                title: "List",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                title: `Team member info`,
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
