import { Pressable, Text, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={[styles.title]}>iReactApp</Text>
      <Text style={[styles.subTitle]}>Click start to get starter.</Text>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate("List");
          }}
        >
          <Text style={styles.btnText}>Start</Text>
        </Pressable>
      </View>
      <Text style={styles.credit}>By Tay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    letterSpacing: 0.1,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    paddingTop: 40,
    lineHeight: 21,
    color: "#8a8a8e",
  },
  button: {
    paddingVertical: 17,
    paddingHorizontal: 129,
    flex: 1,
    borderRadius: 8,
    position: "absolute",
    bottom: 100,
    backgroundColor: "#007aff",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    lineHeight: 22,
    fontSize: 17,
    textAlign: "center",
  },
  credit: {
    position: "absolute",
    bottom: 35,
  },
});

export default HomeScreen;
