import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";

var { width, height } = Dimensions.get("window");
const Card = ({ title, img, onPressView }) => {
  return (
    <TouchableWithoutFeedback onPress={onPressView}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={img}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoContainerText}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 20,
    elevation: 8,
  },
  imgContainer: {
    width: width * 0.38,
    height: height * 0.11,
  },
  infoContainer: {},
  infoContainerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#535353",
  },
});
