import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("tab");
  }, 4000);
  return (
    <View style={styles.container}>
      <View style={styles.app_cont}>
        <Image
          source={require("../assets/images/app_logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.app_title}>Foodie</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  app_cont: {
    alignItems: "center",
  },
  app_title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
});
