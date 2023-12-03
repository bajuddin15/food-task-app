import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import DefaultSelect from "../components/DefaultSelect";

const catData = [
  {
    id: 1,
    name: "Vegetables",
    img: require("../assets/images/vegetables.jpg"),
  },
  {
    id: 2,
    name: "Rice",
    img: require("../assets/images/rice.webp"),
  },
  {
    id: 3,
    name: "Dal",
    img: require("../assets/images/daal.webp"),
  },
  {
    id: 4,
    name: "Milk",
    img: require("../assets/images/milk.jpg"),
  },
  {
    id: 5,
    name: "Aata",
    img: require("../assets/images/aata.jpg"),
  },
  {
    id: 6,
    name: "Oil",
    img: require("../assets/images/oil.webp"),
  },
  {
    id: 7,
    name: "Milk",
    img: require("../assets/images/milk.jpg"),
  },
  {
    id: 8,
    name: "Aata",
    img: require("../assets/images/aata.jpg"),
  },
  {
    id: 9,
    name: "Oil",
    img: require("../assets/images/oil.webp"),
  },
  {
    id: 10,
    name: "Milk",
    img: require("../assets/images/milk.jpg"),
  },
  {
    id: 11,
    name: "Aata",
    img: require("../assets/images/aata.jpg"),
  },
  {
    id: 12,
    name: "Oil",
    img: require("../assets/images/oil.webp"),
  },
  {
    id: 13,
    name: "Milk",
    img: require("../assets/images/milk.jpg"),
  },
  {
    id: 14,
    name: "Aata",
    img: require("../assets/images/aata.jpg"),
  },
  {
    id: 15,
    name: "Oil",
    img: require("../assets/images/oil.webp"),
  },
];

var { width, height } = Dimensions.get("window");
const DefaultScreen = ({ navigation }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            fontWeight: "500",
            marginLeft: 10,
          }}
        >
          Create your inventory
        </Text>
      </View>
      <View style={styles.bg_screen}>
        <Image
          source={require("../assets/images/bg-screen2.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.inputCont}>
            <TextInput placeholder="Item name" style={styles.input} />
            <View
              style={[
                styles.input,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              <TextInput placeholder="Quantity" keyboardType="numeric" />
              <DefaultSelect />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                paddingVertical: 10,
                alignItems: "center",
                borderRadius: 5,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>Add Items</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.catCont}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 3,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontWeight: "500",
            }}
          >
            Choose by categories
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontWeight: "500",
            }}
          >
            {" "}
            Total items: <Text style={{ color: "red" }}>{catData.length}</Text>
          </Text>
        </View>

        <View style={{ height: height * 0.5 }}>
          <FlatList
            data={catData}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  navigation.navigate("categories", { catNav: item.name })
                }
              >
                <Image
                  source={item.img}
                  style={{
                    width: "100%",
                    height: 50,
                    objectFit: "contain",
                  }}
                />
                <Text
                  style={{ textAlign: "center", marginTop: 5, fontSize: 13 }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            numColumns={3}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </View>

        {/* <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <View>
              <Text style={{ fontSize: 14 }}>Total Items</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>30</Text>
            </View>
          </View>
          <View style={styles.footerRight}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}>
              View Inventory
            </Text>
            <AntDesign name="caretdown" size={14} color="black" />
          </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
  },
  bg_screen: {
    width: "100%",
    height: height * 0.35,
    position: "relative",
  },
  inputCont: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 40,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    fontSize: 13,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 5,
    marginBottom: 25,
  },
  catCont: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  item: {
    margin: 5,
    backgroundColor: "white",
    elevation: 10,
    padding: 5,
    flex: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    padding: 10,
    marginTop: 10,
  },
  footerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
});
