import { Text, Pressable, View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Faker, base, en, en_CA, fr_CA } from "@faker-js/faker";
import { useState, useEffect } from "react";

import { Image } from "expo-image";

export default function ListScreen({ route, navigation }) {
  const [listFlatListData, setlistFlatListData] = useState();
  const [resultsCount, setResultsCount] = useState(0);

  const viewDetails = (params) => {
    navigation.navigate("Details", params);
  };

  useEffect(() => {
    setResultsCount(17);

    const userImages = {
      1: require("../assets/users/user-1.jpg"),
      2: require("../assets/users/user-2.jpg"),
      3: require("../assets/users/user-3.jpg"),
      4: require("../assets/users/user-4.jpg"),
      5: require("../assets/users/user-5.jpg"),
      6: require("../assets/users/user-6.jpg"),
      7: require("../assets/users/user-7.jpg"),
      8: require("../assets/users/user-8.jpg"),
      9: require("../assets/users/user-9.jpg"),
      10: require("../assets/users/user-10.jpg"),
      11: require("../assets/users/user-11.jpg"),
      12: require("../assets/users/user-12.jpg"),
      13: require("../assets/users/user-13.jpg"),
      14: require("../assets/users/user-14.jpg"),
      15: require("../assets/users/user-15.jpg"),
      16: require("../assets/users/user-16.jpg"),
      17: require("../assets/users/user-17.jpg"),
    };
    const listData = [];

    const UserGenerator = new Faker({ locale: [en_CA, fr_CA, en, base] });

    for (let i = 0; i < 17; i++) {
      // UserGenerator.seed(i * 100);
      const name = UserGenerator.person.fullName();
      const role = UserGenerator.person.jobTitle();
      const email = UserGenerator.internet.email();
      const location =
        UserGenerator.location.city() + ", " + UserGenerator.location.state();
      const phone = UserGenerator.phone.number();
      const description = UserGenerator.person.bio();
      const company = UserGenerator.company.name();
      const image = userImages[i + 1];

      listData.push(
        <ListCard
          key={i}
          name={name}
          role={role}
          email={email}
          location={location}
          phone={phone}
          description={description}
          company={company}
          image={image}
          viewDetails={viewDetails}
        />
      );
    }

    setlistFlatListData(listData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNavigation}>
        <View style={styles.currentUser}>
          <View style={styles.screenInfo}>
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile.png")}
            />
            <Text style={styles.userName}>Baxter Fox</Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.logout}>Logout</Text>
          </Pressable>
        </View>

        <View style={styles.queryInfo}>
          <Text style={styles.pageName}>{`Your team`}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.queryInformation}>Results ({resultsCount})</Text>
        </View>
      </View>
      <View style={styles.listWrapper}>
        <FlatList data={listFlatListData} renderItem={({ item }) => item} />
      </View>
    </SafeAreaView>
  );
}

function ListCard({
  viewDetails,
  name,
  role,
  email,
  location,
  phone,
  description,
  company,
  image,
}) {
  return (
    <Pressable
      onPress={() => {
        viewDetails({
          name: name,
          role: role,
          email: email,
          location: location,
          phone: phone,
          description: description,
          company: company,
          image: image,
        });
      }}
    >
      <View style={[cardStyles.container]}>
        <Image style={cardStyles.imageIcon} contentFit="cover" source={image} />
        <View style={cardStyles.cardBox}>
          <Text style={cardStyles.cardName}>{name}</Text>
          <Text style={cardStyles.role}>{role}</Text>
          <Text style={cardStyles.location}>{location}</Text>
        </View>
        <Image
          style={cardStyles.backIcon}
          contentFit="cover"
          source={require("../assets/chevron.png")}
        />
      </View>
    </Pressable>
  );
}

const cardStyles = StyleSheet.create({
  imageIcon: {
    borderRadius: 8,
    width: 64,
    height: 64,
  },
  cardName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#e1e2ef",
  },
  role: {
    marginBottom: 10,
    fontSize: 12,
    color: "#9396c1",
  },
  location: {
    fontSize: 12,
    color: "#9396c1",
  },
  cardBox: {
    marginLeft: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
  backIcon: {
    width: 15,
    height: 23,
    right: 5,
  },
  container: {
    borderRadius: 10,
    backgroundColor: "#26273F",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    alignItems: "center",
  },
});

const styles = StyleSheet.create({
  currentUser: {
    width: "100%",
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  queryInformation: {
    fontSize: 20,
    color: "#9496a7",
    fontWeight: "600",
    justifyContent: "flex-start",
    textAlign: "left",
    width: "100%",
    marginBottom: 15,
  },
  info: {
    paddingHorizontal: 15,
  },
  pageName: {
    fontSize: 29,
    letterSpacing: 0.6,
    lineHeight: 37,
    fontWeight: "700",
    color: "#f3f4ff",
  },
  screenInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  queryInfo: {
    width: "100%",
    left: 0,
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#26273F",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  logout: {
    paddingRight: 15,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 26,
    color: "#e1e2ef",
    fontWeight: "600",
  },
  userName: {
    marginLeft: 15,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 26,
    color: "#e1e2ef",
    fontWeight: "600",
  },
  profileIcon: {
    borderRadius: 50,
    paddingRight: 15,
    width: 52,
    height: 52,
  },
  topNavigation: {
    alignItems: "left",
    width: "100%",
  },
  listWrapper: {
    flex: 1,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    paddingVertical: 15,
    maxHeight: "70%",
  },
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#181933",
  },
});
