import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Component6 = ({ style }) => {
  return (
    <View style={[styles.view, style]}>
      <Image
        style={styles.iconsFilledGridCopy9}
        resizeMode="cover"
        source={require("../assets/22-iconsfilledgrid-copy-9.png")}
      />
      <View style={styles.navbarTextActiveView}>
        <Text style={styles.discoverText}>Nearby</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsFilledGridCopy9: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveView: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view: {
    position: "relative",
    width: 75,
    height: 40,
    overflow: "hidden",
  },
});

export default Component6;
