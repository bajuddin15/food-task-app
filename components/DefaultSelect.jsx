import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, View } from "react-native";

const DefaultSelect = () => {
  const [selectedValue, setSelectedValue] = useState("kg");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
      }}
    >
      <Text style={{ marginRight: -15, fontSize: 16 }}>{selectedValue}</Text>
      <Picker
        selectedValue={selectedValue}
        style={{
          width: 50,
          marginRight: -20,
          // backgroundColor: "red",
        }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="kg" value="kg" />
        <Picker.Item label="gm" value="gm" />
        <Picker.Item label="l" value="l" />
        <Picker.Item label="ml" value="ml" />
      </Picker>
    </View>
  );
};

export default DefaultSelect;
