import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 15 }}>
        <Text>NotificationScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
