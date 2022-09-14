import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Nearby = () => {
  return (
    <View style={styles.nearbyView}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <View style={styles.popupSearchView}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line.png")}
        />
        <View style={styles.btnsearchView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.findASalonServic}>Find a salon, services,…</Text>
          <Image
            style={styles.iconsLineLocation}
            resizeMode="cover"
            source={require("../assets/22-iconslinelocation1.png")}
          />
        </View>
        <Text style={styles.chicagoIllinoisU}>Chicago, Illinois, US.</Text>
        <Image
          style={styles.iconsLineLeftArrowLong}
          resizeMode="cover"
          source={require("../assets/22-iconslineleft-arrow-long.png")}
        />
      </View>
      <View style={styles.card2View}>
        <View style={styles.rectangleCopy3} />
        <View style={styles.rectangleCopy10} />
        <Text style={styles.pagacDriveChi}>171 Pagac Drive, Chicago,…</Text>
        <Text style={styles.margueriteCrossDa}>Marguerite Cross Da…</Text>
        <Text style={styles.text}>4.5</Text>
        <Text style={styles.kmText}>4.5 Km</Text>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/22-icons.png")}
        />
        <Image
          style={styles.ovalCopy2}
          resizeMode="cover"
          source={require("../assets/oval-copy-2.png")}
        />
      </View>
      <View style={styles.card1View}>
        <View style={styles.rectangleCopy31} />
        <View style={styles.rectangleCopy101} />
        <Text style={styles.rebecaLodgeSui}>817 Rebeca Lodge Suite,…</Text>
        <Text style={styles.brettGomezSalon}>Brett Gomez Salon</Text>
        <Text style={styles.text1}>4.5</Text>
        <Text style={styles.kmText1}>4.5 Km</Text>
        <Image
          style={styles.icons1}
          resizeMode="cover"
          source={require("../assets/22-icons1.png")}
        />
        <Image
          style={styles.ovalCopy21}
          resizeMode="cover"
          source={require("../assets/oval-copy-21.png")}
        />
      </View>
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>
              <Text style={styles.text2}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.salonNearYou}>Salon Near You</Text>
      <Image
        style={styles.filterIcon}
        resizeMode="cover"
        source={require("../assets/filter.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapIcon: {
    position: "absolute",
    height: "100%",
    width: "213.6%",
    top: "0%",
    right: "-113.6%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(140, 136, 175, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  lineIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -90.5,
      },
      {
        translateX: -17.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 36,
    height: 5,
    opacity: 0.15,
  },
  rectangleView1: {
    position: "absolute",
    height: "102.27%",
    width: "100.32%",
    top: "-1.14%",
    right: "-0.16%",
    bottom: "-1.14%",
    left: "-0.16%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#f4f4f4",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  findASalonServic: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 37,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "left",
  },
  iconsLineLocation: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 8,
    width: 24,
    height: 24,
  },
  btnsearchView: {
    position: "absolute",
    transform: [
      {
        translateY: -34.5,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 44,
    overflow: "hidden",
  },
  chicagoIllinoisU: {
    position: "absolute",
    transform: [
      {
        translateY: -70.5,
      },
    ],
    top: "50%",
    left: 39,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 170,
  },
  iconsLineLeftArrowLong: {
    position: "absolute",
    transform: [
      {
        translateY: -70.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 18,
    height: 18,
  },
  popupSearchView: {
    position: "absolute",
    transform: [
      {
        translateY: 209,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 197,
    overflow: "hidden",
  },
  rectangleCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -43.5,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(140, 136, 175, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 265,
    height: 87,
  },
  rectangleCopy10: {
    position: "absolute",
    transform: [
      {
        translateY: -33.5,
      },
    ],
    top: "50%",
    left: 10,
    borderRadius: 8,
    backgroundColor: "#8f9bb3",
    width: 87,
    height: 67,
  },
  pagacDriveChi: {
    position: "absolute",
    transform: [
      {
        translateY: -6.5,
      },
    ],
    top: "50%",
    left: 107,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 145,
    opacity: 0.56,
  },
  margueriteCrossDa: {
    position: "absolute",
    transform: [
      {
        translateY: -33.5,
      },
    ],
    top: "50%",
    left: 107,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 146,
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: 18.5,
      },
    ],
    top: "50%",
    left: 107,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "right",
    width: 19,
  },
  kmText: {
    position: "absolute",
    transform: [
      {
        translateY: 18.5,
      },
    ],
    top: "50%",
    left: 171,
    fontSize: 12,
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 49,
  },
  icons: {
    position: "absolute",
    transform: [
      {
        translateY: 532.5,
      },
    ],
    top: "50%",
    left: 421,
    width: 17,
    height: 17,
  },
  ovalCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: 538.5,
      },
    ],
    top: "50%",
    left: 448,
    width: 5,
    height: 5,
  },
  card2View: {
    position: "absolute",
    transform: [
      {
        translateY: 110,
      },
    ],
    top: "50%",
    left: 292,
    width: 265,
    height: 87,
  },
  rectangleCopy31: {
    position: "absolute",
    transform: [
      {
        translateY: -43.5,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(140, 136, 175, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 265,
    height: 87,
  },
  rectangleCopy101: {
    position: "absolute",
    transform: [
      {
        translateY: -33.5,
      },
    ],
    top: "50%",
    left: 10,
    borderRadius: 8,
    backgroundColor: "#8f9bb3",
    width: 87,
    height: 67,
  },
  rebecaLodgeSui: {
    position: "absolute",
    transform: [
      {
        translateY: -6.5,
      },
    ],
    top: "50%",
    left: 107,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 145,
    opacity: 0.56,
  },
  brettGomezSalon: {
    position: "absolute",
    transform: [
      {
        translateY: -33.5,
      },
    ],
    top: "50%",
    left: 107,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 146,
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: 18.5,
      },
    ],
    top: "50%",
    left: 107,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "right",
    width: 19,
  },
  kmText1: {
    position: "absolute",
    transform: [
      {
        translateY: 18.5,
      },
    ],
    top: "50%",
    left: 171,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 49,
  },
  icons1: {
    position: "absolute",
    transform: [
      {
        translateY: 16.5,
      },
    ],
    top: "50%",
    left: 129,
    width: 17,
    height: 17,
  },
  ovalCopy21: {
    position: "absolute",
    transform: [
      {
        translateY: 22.5,
      },
    ],
    top: "50%",
    left: 156,
    width: 5,
    height: 5,
  },
  card1View: {
    position: "absolute",
    transform: [
      {
        translateY: 110,
      },
    ],
    top: "50%",
    left: 15,
    width: 265,
    height: 87,
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  groupIcon: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 68,
    height: 12,
    overflow: "hidden",
  },
  text2: {
    letterSpacing: -0.28,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 54,
  },
  timeStyleView: {
    position: "absolute",
    top: 13,
    left: 21,
    width: 54,
    height: 21,
  },
  iPhoneXStatusBarsStatusBa: {
    position: "absolute",
    transform: [
      {
        translateY: -22,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 44,
    overflow: "hidden",
  },
  iPhoneXStatusBarsStatusBa1: {
    position: "absolute",
    height: "5.42%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
  },
  salonNearYou: {
    position: "absolute",
    transform: [
      {
        translateY: -355,
      },
      {
        translateX: -56.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
  },
  filterIcon: {
    position: "absolute",
    top: 49,
    right: 15,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  nearbyView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Nearby;
