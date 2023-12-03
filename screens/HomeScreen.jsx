import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Card from "../components/home/Card";

import DiscoveryImg from "../assets/images/discovery.webp";
import MarketingImg from "../assets/images/marketing.jpg";
import InventoryImg from "../assets/images/inventory.png";
import DigimenuImg from "../assets/images/digimenu.webp";
import BannerCarousel from "../components/home/BannerCarousel";

var { width, height } = Dimensions.get("window");
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.secondary} />
      {/* header of dashoard */}
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <TouchableOpacity>
            <MaterialIcons name="menu" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* small banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerleft}>
            <View style={styles.bannerleftCont}>
              <Text style={styles.bannerleftTitle}>Next Order Scheduled</Text>
              <TouchableOpacity style={styles.bannerLeftBtn}>
                <Text style={styles.bannerLeftBtnText}>20 June 2023</Text>
              </TouchableOpacity>
              <View style={styles.bannerLeftTime}>
                <MaterialCommunityIcons
                  name="clock-fast"
                  size={30}
                  color="black"
                />
                <Text style={styles.bannerLeftTimeText}>
                  10:30 AM | Tuesday
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bannerRight}>
            <Image
              source={require("../assets/images/fruits.webp")}
              style={{
                width: "100%",
                height: "100%",
                padding: 5,
                objectFit: "contain",
              }}
            />
          </View>
        </View>
        {/* large banner carousel */}
        <View>
          <BannerCarousel />
        </View>
        <View style={{ backgroundColor: "#ebebeb", marginTop: -15 }}>
          <View style={styles.cardContainer}>
            <View style={{ flex: 1, margin: 10 }}>
              <Card
                title="Inventory"
                img={InventoryImg}
                onPressView={() => navigation.navigate("default")}
              />
            </View>
            <View style={{ flex: 1, margin: 10 }}>
              <Card
                title="Discovery"
                img={DiscoveryImg}
                onPressView={() => console.log("discovery press")}
              />
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={{ flex: 1, margin: 10 }}>
              <Card
                title="Digi Menu"
                img={DigimenuImg}
                onPressView={() => console.log(" press")}
              />
            </View>
            <View style={{ flex: 1, margin: 10 }}>
              <Card
                title="Marketing"
                img={MarketingImg}
                onPressView={() => console.log("marketing press")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {},
  headerTitle: {
    color: colors.textSoft,
    fontSize: 16,
  },
  headerMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    width: "100%",
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    elevation: 5,
  },
  bannerContainer: {
    flexDirection: "row",
    height: height * 0.18,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  bannerleft: {
    flex: 1,
    borderRightWidth: 2,
    borderRightColor: "green",
  },
  bannerleftCont: {},
  bannerleftTitle: {
    color: "red",
    fontSize: 13,
    fontWeight: "bold",
  },
  bannerLeftBtn: {
    backgroundColor: "green",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    width: width * 0.38,
  },
  bannerLeftBtnText: {
    color: "white",
    fontSize: 13,
  },
  bannerLeftTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  bannerLeftTimeText: {
    marginLeft: 5,
    fontSize: 13,
  },
  bannerRight: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
});
