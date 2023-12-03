import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import CategoryCard from "../components/category/CategoryCard";

const catData = [
  {
    name: "Aata",
    img: require("../assets/images/aata.jpg"),
  },
  {
    name: "Rice",
    img: require("../assets/images/rice.webp"),
  },
  {
    name: "Dal",
    img: require("../assets/images/daal.webp"),
  },
  {
    name: "Milk",
    img: require("../assets/images/milk.jpg"),
  },
  {
    name: "Oil",
    img: require("../assets/images/oil.webp"),
  },
  {
    name: "Vegetables",
    img: require("../assets/images/vegetables.jpg"),
  },
];

const aataData = [
  {
    id: 1,
    brandProduct: "Aashirvaad Atta",
    title: "Sharbati Wheat",
  },
  {
    id: 2,
    brandProduct: "Manna Atta",
    title: "Multigrains Wheat",
  },
  {
    id: 3,
    brandProduct: "Aashirvaad Atta",
    title: "Sharbati Wheat",
  },
  {
    id: 4,
    brandProduct: "Aashirvaad Atta",
    title: "Sharbati Wheat",
  },
];
const riceData = [
  {
    id: 1,
    brandProduct: "Aashirvaad Rice",
    title: "Sharbati Rice",
  },
  {
    id: 2,
    brandProduct: "Manna Rice",
    title: "Multigrains Rice",
  },
];
const vegetablesData = [
  {
    id: 1,
    brandProduct: "Aashirvaad Vegetables",
    title: "Sharbati Vegetables",
  },
  {
    id: 2,
    brandProduct: "Manna Vegetables",
    title: "Multigrains Vegetables",
  },
];
const dalData = [
  {
    id: 1,
    brandProduct: "Aashirvaad Dal",
    title: "Sharbati Dal",
  },
  {
    id: 2,
    brandProduct: "Manna Dal",
    title: "Multigrains Dal",
  },
];
const milkData = [
  {
    id: 1,
    brandProduct: "Aashirvaad Milk",
    title: "Sharbati Milk",
  },
  {
    id: 2,
    brandProduct: "Demo Milk",
    title: "Sharbati Milk",
  },
];
const oilData = [
  {
    id: 1,
    brandProduct: "Aashirvaad Oil",
    title: "Sharbati Oil",
  },
  {
    id: 1,
    brandProduct: "Demo Oil",
    title: "Sharbati Oil",
  },
];

var { width, height } = Dimensions.get("window");
const CategoryScreen = ({ navigation, route }) => {
  const { catNav } = route.params;
  const [selectedCat, setSelectedCat] = useState(catNav);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let cat = catNav;
    if (cat === "Aata") {
      setListData(aataData);
    } else if (cat === "Rice") {
      setListData(riceData);
    } else if (cat === "Dal") {
      setListData(dalData);
    } else if (cat === "Milk") {
      setListData(milkData);
    } else if (cat === "Oil") {
      setListData(oilData);
    } else if (cat === "Vegetables") {
      setListData(vegetablesData);
    }
  }, [catNav]);

  const handleCatChange = (cat) => {
    setSelectedCat(cat);
    if (cat === "Aata") {
      setListData(aataData);
    } else if (cat === "Rice") {
      setListData(riceData);
    } else if (cat === "Dal") {
      setListData(dalData);
    } else if (cat === "Milk") {
      setListData(milkData);
    } else if (cat === "Oil") {
      setListData(oilData);
    } else if (cat === "Vegetables") {
      setListData(vegetablesData);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 15,
          backgroundColor: "white",
          paddingHorizontal: 15,
          elevation: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View
            style={{
              width: 30,
              height: 30,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 5,
              marginLeft: 10,
            }}
          ></View>
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginRight: 5,
                }}
              >
                Categories
              </Text>
              <AntDesign name="caretdown" size={14} color="black" />
            </View>
            <Text>563 items</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors.textSoft,
              borderRadius: 999,
              padding: 7,
            }}
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* sidebar */}
      <View style={styles.mainCont}>
        <View style={styles.sidebarCont}>
          <FlatList
            data={catData}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  flexDirection: "row",
                }}
                onPress={() => handleCatChange(item.name)}
              >
                <View
                  style={{
                    width: 6,
                    height: 50,
                    backgroundColor:
                      selectedCat === item.name ? "green" : "white",
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    alignItems: "center",
                    marginLeft: 15,
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderWidth: 1,
                      borderColor: selectedCat === item.name ? "green" : "grey",
                      borderRadius: 5,
                      backgroundColor: "#f5f3f2",
                    }}
                  ></View>
                  <Text style={{ marginTop: 5, fontSize: 14 }}>
                    {item.name.length > 6
                      ? item.name.slice(0, 6) + ".."
                      : item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.contentCont}>
          <FlatList
            data={listData}
            renderItem={({ item }) => <CategoryCard item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{
              flex: 1,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainCont: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 6,
  },
  sidebarCont: {
    flex: 1,
    backgroundColor: "white",
    elevation: 10,
    minHeight: height * 0.89,
    marginRight: 5,
  },
  contentCont: {
    flex: 3,
    marginLeft: 0,
  },
});
