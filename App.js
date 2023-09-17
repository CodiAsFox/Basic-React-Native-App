import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import ListScreen from "./screens/List";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
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
              headerStyle: {
                backgroundColor: "#281d4e",
              },
              headerTintColor: "#f6f6f6",
            }}
          />
          <Stack.Screen
            name="Other"
            component={DetailsScreen}
            options={{
              title: "List Item",
              headerStyle: {
                backgroundColor: "#281d4e",
              },
              headerTintColor: "#f6f6f6",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    // justifyContent: "flex-start",
  },
});
