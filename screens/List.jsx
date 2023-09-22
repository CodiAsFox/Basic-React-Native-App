import { Text, Pressable, View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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

    const listData = [
      <ListCard
        name="Aubrey Jean-Baptiste"
        role="Software Engineer"
        email="aubreyjb@example.com"
        location="Radisson, Newfoundland and Labrador"
        phone="(709)-555-0115"
        image={require(`../assets/users/user-1.jpg`)}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Emma Leblanc"
        role="Product Manager"
        email="emmaleb@example.com"
        location="Toronto, Ontario"
        phone="(416)-555-0215"
        image={require("../assets/users/user-2.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Oliver Smith"
        role="Data Scientist"
        email="olivers@example.com"
        location="Vancouver, British Columbia"
        phone="(604)-555-0341"
        image={require("../assets/users/user-3.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Ava Tremblay"
        role="UX Designer"
        email="avatr@example.com"
        location="Montreal, Quebec"
        phone="(514)-555-0923"
        image={require("../assets/users/user-4.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Sophia Roy"
        role="DevOps Engineer"
        email="sophiar@example.com"
        location="Calgary, Alberta"
        phone="(403)-555-0651"
        image={require("../assets/users/user-5.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Liam Gagnon"
        role="Backend Developer"
        email="liamg@example.com"
        location="Ottawa, Ontario"
        phone="(613)-555-0789"
        image={require("../assets/users/user-6.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Isabella Martin"
        role="Frontend Developer"
        email="isabellam@example.com"
        location="Edmonton, Alberta"
        phone="(780)-555-0981"
        image={require("../assets/users/user-7.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Lucas Pelletier"
        role="QA Engineer"
        email="lucasp@example.com"
        location="Winnipeg, Manitoba"
        phone="(204)-555-0452"
        image={require("../assets/users/user-8.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Mia Dubois"
        role="Technical Writer"
        email="miad@example.com"
        location="Quebec City, Quebec"
        phone="(418)-555-0123"
        image={require("../assets/users/user-9.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Henry Fortin"
        role="Security Analyst"
        email="henryf@example.com"
        location="Halifax, Nova Scotia"
        phone="(902)-555-0291"
        image={require("../assets/users/user-10.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Charlotte Desjardins"
        role="Database Administrator"
        email="charlotted@example.com"
        location="Saskatoon, Saskatchewan"
        phone="(306)-555-0987"
        image={require("../assets/users/user-11.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="William Girard"
        role="Network Engineer"
        email="williamg@example.com"
        location="St. John's, Newfoundland and Labrador"
        phone="(709)-555-1234"
        image={require("../assets/users/user-12.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Ella Beauchamp"
        role="System Architect"
        email="ellab@example.com"
        location="Victoria, British Columbia"
        phone="(250)-555-0189"
        image={require("../assets/users/user-13.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Benjamin Gauthier"
        role="Project Manager"
        email="benjaming@example.com"
        location="Regina, Saskatchewan"
        phone="(306)-555-0412"
        image={require("../assets/users/user-14.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Olivia Bernard"
        role="Mobile Developer"
        email="oliviab@example.com"
        location="Charlottetown, Prince Edward Island"
        phone="(902)-555-0982"
        image={require("../assets/users/user-15.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Leo Lavoie"
        role="AI Specialist"
        email="leol@example.com"
        location="Fredericton, New Brunswick"
        phone="(506)-555-0298"
        image={require("../assets/users/user-16.jpg")}
        viewDetails={viewDetails}
      />,
      <ListCard
        name="Isabelle Poirier"
        role="SEO Expert"
        email="isabellep@example.com"
        location="Yellowknife, Northwest Territories"
        phone="(867)-555-0345"
        image={require("../assets/users/user-17.jpg")}
        viewDetails={viewDetails}
      />,
    ];

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

function ListCard({ viewDetails, name, role, email, location, phone, image }) {
  return (
    <Pressable
      onPress={() => {
        viewDetails({
          name: name,
          role: role,
          email: email,
          location: location,
          phone: phone,
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
    backgroundColor: "#1f2269",
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
    backgroundColor: "#190840",
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
    backgroundColor: "#190840",
  },
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#181933",
  },
});
