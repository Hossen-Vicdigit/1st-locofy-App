import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Calls = () => {
  return (
    <View style={styles.callsView}>
      <View style={styles.backgroundView} />
      <View style={styles.card6View}>
        <Text style={styles.norahBeautySa}>Norah Beauty Sa…</Text>
        <Text style={styles.youCallThem}>You call them</Text>
        <Image
          style={styles.ovalIcon}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-13.png")}
        />
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={styles.iconsLineInvCallCopy5}
          resizeMode="cover"
          source={require("../assets/22-iconslineinv-call-copy-5.png")}
        />
      </View>
      <View style={styles.card5View}>
        <View style={styles.rectangleCopy8} />
        <Text style={styles.daleHowardF}>{`Dale Howard & F…`}</Text>
        <Text style={styles.themMissedCall}>Them missed call</Text>
        <Image
          style={styles.ovalIcon1}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group-13.png")}
        />
        <Image
          style={styles.groupIcon3}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={styles.iconsLineInvCallCopy4}
          resizeMode="cover"
          source={require("../assets/22-iconslineinv-call-copy-4.png")}
        />
      </View>
      <View style={styles.card4View}>
        <View style={styles.rectangleCopy7} />
        <Text style={styles.hairStudioText}>Hair Studio</Text>
        <Text style={styles.themCallYou}>Them call you</Text>
        <Image
          style={styles.ovalIcon2}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={styles.groupIcon4}
          resizeMode="cover"
          source={require("../assets/group-13.png")}
        />
        <Image
          style={styles.groupIcon5}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={styles.iconsLineInvCallCopy3}
          resizeMode="cover"
          source={require("../assets/22-iconslineinv-call-copy-5.png")}
        />
      </View>
      <View style={styles.card3View}>
        <View style={styles.rectangleCopy6} />
        <Text style={styles.theWordOfMa}>The Word of Ma…</Text>
        <Text style={styles.youCallThem1}>You call them</Text>
        <Image
          style={styles.ovalIcon3}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={styles.groupIcon6}
          resizeMode="cover"
          source={require("../assets/group-13.png")}
        />
        <Image
          style={styles.groupIcon7}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={styles.iconsLineInvCallCopy2}
          resizeMode="cover"
          source={require("../assets/22-iconslineinv-call-copy-5.png")}
        />
      </View>
      <View style={styles.card2View}>
        <View style={styles.rectangleCopy5} />
        <Text style={styles.youngGirlsSalon}>Young Girls Salon</Text>
        <Text style={styles.youMissedCall}>You missed call</Text>
        <Image
          style={styles.ovalIcon4}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={styles.groupIcon8}
          resizeMode="cover"
          source={require("../assets/group-13.png")}
        />
        <Image
          style={styles.groupIcon9}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={styles.iconsLineInvCallCopy}
          resizeMode="cover"
          source={require("../assets/22-iconslineinv-call-copy-4.png")}
        />
      </View>
      <View style={styles.card1View}>
        <View style={styles.rectangleCopy4} />
        <Text style={styles.margueriteCroText}>Marguerite Cro…</Text>
        <Text style={styles.youCallThem2}>You call them</Text>
        <Image
          style={styles.ovalIcon5}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={styles.groupIcon10}
          resizeMode="cover"
          source={require("../assets/group-13.png")}
        />
        <Image
          style={styles.groupIcon11}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={styles.iconsLineInvCall}
          resizeMode="cover"
          source={require("../assets/22-iconslineinv-call-copy-5.png")}
        />
      </View>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleCopy3} />
      <Text style={styles.messagesText}>Messages</Text>
      <View style={styles.groupView}>
        <Text style={styles.callsText}>Calls</Text>
        <View style={styles.rectangleCopy2} />
      </View>
      <View style={styles.bntsearchView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.searchText}>Search</Text>
        <Image
          style={styles.iconsLineLocation}
          resizeMode="cover"
          source={require("../assets/22-iconslinelocation.png")}
        />
      </View>
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.groupIcon12}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>
              <Text style={styles.text}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    position: "absolute",
    height: "87.93%",
    width: "100%",
    top: "12.07%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f4f4",
  },
  norahBeautySa: {
    position: "absolute",
    transform: [
      {
        translateY: -21.5,
      },
    ],
    top: "50%",
    left: 70,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 164.48,
  },
  youCallThem: {
    position: "absolute",
    transform: [
      {
        translateY: 3.5,
      },
    ],
    top: "50%",
    left: 89,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 123,
  },
  ovalIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -27.5,
      },
    ],
    top: "50%",
    left: 0,
    width: 55,
    height: 55,
  },
  groupIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -18.5,
      },
    ],
    top: "50%",
    right: 0,
    width: 38,
    height: 38,
  },
  groupIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: -18.5,
      },
    ],
    top: "50%",
    right: 58,
    width: 38,
    height: 38,
  },
  iconsLineInvCallCopy5: {
    position: "absolute",
    transform: [
      {
        translateY: 5.5,
      },
    ],
    top: "50%",
    left: 70,
    width: 14,
    height: 14,
  },
  card6View: {
    position: "absolute",
    transform: [
      {
        translateY: 205,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 55,
    overflow: "hidden",
  },
  rectangleCopy8: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  daleHowardF: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 153,
  },
  themMissedCall: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 104,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 123,
  },
  ovalIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  groupIcon2: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 15,
    width: 38,
    height: 38,
  },
  groupIcon3: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 73,
    width: 38,
    height: 38,
  },
  iconsLineInvCallCopy4: {
    position: "absolute",
    transform: [
      {
        translateY: -2.5,
      },
    ],
    top: "50%",
    left: 85,
    width: 14,
    height: 14,
  },
  card5View: {
    position: "absolute",
    transform: [
      {
        translateY: 119,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy7: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  hairStudioText: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 159,
  },
  themCallYou: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 104,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 115,
  },
  ovalIcon2: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  groupIcon4: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 15,
    width: 38,
    height: 38,
  },
  groupIcon5: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 73,
    width: 38,
    height: 38,
  },
  iconsLineInvCallCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -2.5,
      },
    ],
    top: "50%",
    left: 85,
    width: 14,
    height: 14,
  },
  card4View: {
    position: "absolute",
    transform: [
      {
        translateY: 33,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy6: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  theWordOfMa: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 159,
  },
  youCallThem1: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 104,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 115,
  },
  ovalIcon3: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  groupIcon6: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 15,
    width: 38,
    height: 38,
  },
  groupIcon7: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 73,
    width: 38,
    height: 38,
  },
  iconsLineInvCallCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: -3.5,
      },
    ],
    top: "50%",
    left: 85,
    width: 14,
    height: 14,
  },
  card3View: {
    position: "absolute",
    transform: [
      {
        translateY: -53,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy5: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  youngGirlsSalon: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 159,
  },
  youMissedCall: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 104,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 115,
  },
  ovalIcon4: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  groupIcon8: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 15,
    width: 38,
    height: 38,
  },
  groupIcon9: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 73,
    width: 38,
    height: 38,
  },
  iconsLineInvCallCopy: {
    position: "absolute",
    transform: [
      {
        translateY: -2.5,
      },
    ],
    top: "50%",
    left: 85,
    width: 14,
    height: 14,
  },
  card2View: {
    position: "absolute",
    transform: [
      {
        translateY: -139,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy4: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  margueriteCroText: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 159,
  },
  youCallThem2: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 104,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 115,
  },
  ovalIcon5: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  groupIcon10: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 15,
    width: 38,
    height: 38,
  },
  groupIcon11: {
    position: "absolute",
    transform: [
      {
        translateY: -26.5,
      },
    ],
    top: "50%",
    right: 73,
    width: 38,
    height: 38,
  },
  iconsLineInvCall: {
    position: "absolute",
    transform: [
      {
        translateY: -2.5,
      },
    ],
    top: "50%",
    left: 85,
    width: 14,
    height: 14,
  },
  card1View: {
    position: "absolute",
    transform: [
      {
        translateY: -225,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleView: {
    position: "absolute",
    height: "12.19%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "87.81%",
    left: "0%",
    backgroundColor: "#fff",
  },
  rectangleCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -308,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  messagesText: {
    position: "absolute",
    transform: [
      {
        translateY: -336,
      },
      {
        translateX: -141.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 96,
  },
  callsText: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
      {
        translateX: -30.75,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "center",
    width: 62,
  },
  rectangleCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: 13.5,
      },
      {
        translateX: -93.75,
      },
    ],
    top: "50%",
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#ff7e00",
    width: 187.5,
    height: 1,
  },
  groupView: {
    position: "absolute",
    transform: [
      {
        translateY: -336,
      },
      {
        translateX: 0.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 187.5,
    height: 29,
  },
  rectangleView1: {
    position: "absolute",
    height: "100.73%",
    width: "100.29%",
    top: "-0.36%",
    right: "-0.14%",
    bottom: "-0.36%",
    left: "-0.14%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  searchText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 35,
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
    left: 6,
    width: 24,
    height: 24,
  },
  bntsearchView: {
    position: "absolute",
    transform: [
      {
        translateY: -292,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 42,
    overflow: "hidden",
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
  groupIcon12: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 68,
    height: 12,
    overflow: "hidden",
  },
  text: {
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
  callsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Calls;
