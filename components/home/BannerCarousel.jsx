import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import colors from "../../constants/colors";

var { width, height } = Dimensions.get("window");
const BannerCarousel = () => {
  const data = [
    { id: 1, image: require("../../assets/images/aata-banner.jpg") },
    { id: 2, image: require("../../assets/images/magi-banner.jpg") },
    { id: 3, image: require("../../assets/images/sugar-banner.jpg") },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { width: width * 0.93 }]}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <>
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 15,
          marginBottom: -15,
        }}
      >
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          layout="default"
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "transparent" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 2,
          backgroundColor: colors.primary,
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: height * 0.18, // Set your desired height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8, // Optional: Add some styling to slides
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8, // Optional: Add some styling to images
  },
});

export default BannerCarousel;
