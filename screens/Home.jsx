import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaskedView from "@react-native-masked-view/masked-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";

export default function HomePage({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container]}>
      <Image
        style={styles.background}
        contentFit="cover"
        source={require("../assets/blur-effect.png")}
      />
      <View style={styles.textView}>
        <MaskedView
          style={{
            flex: 1,
          }}
          maskElement={
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
              }}
            >
              <Text style={[styles.title, styles.titleFlexBox]}>
                Your coworkers at your fingertips!
              </Text>
            </View>
          }
        >
          <LinearGradient
            colors={["#B36CEA", "#ED9F67"]}
            start={{ x: 0.28, y: 0.8336 }}
            end={{ x: 0.693, y: 0.1664 }}
            style={styles.linearGradient}
          >
            <View
              style={{
                backgroundColor: "transparent",
              }}
            />
          </LinearGradient>
        </MaskedView>
        <Text style={[styles.subTitle, styles.titleFlexBox]}>
          Find your coworkers with just a few taps! Tap continue to get started.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => {
            navigation.navigate("List");
          }}
          style={styles.continueButton}
          mode="outlined"
          labelStyle={styles.continueButtonBtn}
        >
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    alignSelf: "center",
    position: "absolute",
    bottom: 55,
  },
  continueButtonBtn: {
    width: "100%",
    backgroundColor: "#c57cc1",
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 25,
    paddingBottom: 25,
  },
  linearGradient: {
    flexGrow: 1,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  titleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    top: "30%",
    flex: 1,
  },
  background: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 1,
    position: "absolute",
  },
  title: {
    flex: 1,
    fontSize: 45,
    letterSpacing: 2.0,
    flexShrink: 1,
    lineHeight: 55,
    fontWeight: "700",
    height: 60,
    overflow: "hidden",
  },
  subTitle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 29,
    fontWeight: "500",
    color: "#e9e9ff",
    width: 300,
    height: 36,
  },
  textView: {
    flex: 1,
    paddingHorizontal: "5%",
  },
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#181933",
  },
});
