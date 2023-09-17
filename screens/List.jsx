import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ListScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* <Pressable
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text style={styles.txt}>Other Screen</Text>
        <Text style={styles.txt}>{route.params.num}</Text>
      </Pressable> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  txt: {
    color: "red",
    fontSize: 20,
  },
});
