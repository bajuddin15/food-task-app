import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 15 }}>
        <Text>ProductsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
