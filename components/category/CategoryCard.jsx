import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <View>
          <Text style={{ fontSize: 12 }}>{item.brandProduct}</Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            {item.title}
          </Text>
        </View>
        <Text style={{ fontSize: 11, marginVertical: 10 }}>
          25kg quantity in Pack
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>₹ 80/kg</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "gray",
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "green",
                fontWeight: "bold",
              }}
            >
              ADD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 220,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    marginBottom: 5,
    marginRight: 5,
  },
});
