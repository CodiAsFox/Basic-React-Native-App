import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function Details({ route, navigation }) {
  const { name, role, email, location, phone, image, description, company } =
    route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.headerBackground}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={styles.topNavigation}>
          <Pressable
            style={styles.backIconBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={styles.backIcon}
              contentFit="contain"
              source={require("../assets/back.png")}
            />
          </Pressable>
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <View style={[styles.viewPosition]}>
        <View style={styles.profile}>
          <View style={styles.userAvatar}>
            <Image style={styles.avatar} contentFit="cover" source={image} />
          </View>
          <View style={styles.nameLayout}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <View>
              <Text style={styles.userInfo}>Description:</Text>
              <Text style={styles.contactInfoPosition}>{description}</Text>
            </View>
            <View>
              <Text style={styles.userInfo}>Company:</Text>
              <Text style={styles.contactInfoPosition}>{company}</Text>
            </View>

            <View>
              <Text style={styles.userInfo}>Email:</Text>
              <Text style={styles.contactInfoPosition}>{email}</Text>
            </View>
            <View>
              <Text style={styles.userInfo}>Phone:</Text>
              <Text style={styles.contactInfoPosition}>{phone}</Text>
            </View>
            <View>
              <Text style={styles.userInfo}>Location:</Text>
              <Text style={styles.contactInfoPosition}>{location}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userAvatar: {
    height: 158,
    width: 158,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181933",
    paddingHorizontal: 15,
    paddingHorizontal: 15,
  },
  role: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.52)",
  },
  nameLayout: {
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#f3f4ff",
  },

  avatar: {
    width: 137,
    height: 137,
    borderRadius: 20,
  },
  profile: {
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
  profileHeader: {
    flex: 1,
    top: 0,
    left: 0,
  },
  headerBackground: {
    height: 350,
    top: -160,
  },
  topNavigation: {
    flexDirection: "row",
    height: 64,
    width: "100%",
    marginTop: 0,
    paddingHorizontal: 20,
    position: "absolute",
  },
  backIconBtn: {
    height: 20,
    width: "10%",
    marginHorizontal: 0,
    textAlign: "center",
    alignSelf: "center",
    zIndex: 10,
  },
  backIcon: {
    height: "100%",
    width: "100%",
  },
  title: {
    width: "100%",
    left: "-60%",
    zIndex: 0,
    textAlign: "center",
    alignSelf: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
    marginHorizontal: 0,
    letterSpacing: -0.6,
  },
  viewPosition: {
    top: "20%",
    // bottom: "-100%",
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  userInfo: {
    textAlign: "center",
    alignContent: "space-between",
    color: "#fff",
    fontWeight: "700",
    letterSpacing: -0.6,
    fontSize: 24,
  },
  contactInfoPosition: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    paddingHorizontal: 35,
    marginBottom: 20,
  },

  contactInfo: {
    fontWeight: "300",
  },

  contentContainer: {
    borderRadius: 25,
    backgroundColor: "#26273F",
    width: "85%",
    height: "45%",
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 25,
    alignItems: "center",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#181933",
  },
});
