import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AppointmentOngoing = () => {
  return (
    <View style={styles.appointmentOngoingView}>
      <View style={styles.backgroundView} />
      <View style={styles.appointmentView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleCopy3} />
          <View style={styles.rectangleCopy5} />
        </View>
        <Text style={styles.remindMe1hInAdva}>Remind me 1h in advance</Text>
        <Image
          style={styles.toggle5FocusON}
          resizeMode="cover"
          source={require("../assets/-7-toggle5-focus-on.png")}
        />
        <View style={styles.rectangleCopy10} />
        <Text style={styles.mensHaircutsText}>Men's Haircuts</Text>
        <Text style={styles.pMText}>1:30 - 2:30 PM</Text>
        <Image
          style={styles.path3Icon}
          resizeMode="cover"
          source={require("../assets/path-3.png")}
        />
        <View style={styles.groupView1}>
          <Text style={styles.jessieRobertsonText}>Jessie Robertson</Text>
          <Image
            style={styles.iconsFilledGridCopy3}
            resizeMode="cover"
            source={require("../assets/22-iconsfilledgrid-copy-33.png")}
          />
        </View>
        <View style={styles.group25Copy}>
          <Text style={styles.pagacDriveChi}>
            171 Pagac Drive, Chicago, Illinois…
          </Text>
          <Text style={styles.margueriteCrossDay}>
            Marguerite Cross Day Salon
          </Text>
          <Image
            style={styles.iconsFilledLocation}
            resizeMode="cover"
            source={require("../assets/22-iconsfilledlocation.png")}
          />
        </View>
        <Text style={styles.scanBarcodeText}>Scan Barcode</Text>
        <View style={styles.groupView2}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleCopy25} />
          <View style={styles.rectangleCopy39} />
          <View style={styles.rectangleCopy11} />
          <View style={styles.rectangleCopy26} />
          <View style={styles.rectangleCopy40} />
          <View style={styles.rectangleCopy13} />
          <View style={styles.rectangleCopy27} />
          <View style={styles.rectangleCopy16} />
          <View style={styles.rectangleCopy28} />
          <View style={styles.rectangleCopy19} />
          <View style={styles.rectangleCopy29} />
          <View style={styles.rectangleCopy22} />
          <View style={styles.rectangleCopy30} />
          <View style={styles.rectangleCopy17} />
          <View style={styles.rectangleCopy31} />
          <View style={styles.rectangleCopy24} />
          <View style={styles.rectangleCopy32} />
          <View style={styles.rectangleCopy14} />
          <View style={styles.rectangleCopy33} />
          <View style={styles.rectangleCopy20} />
          <View style={styles.rectangleCopy34} />
          <View style={styles.rectangleCopy15} />
          <View style={styles.rectangleCopy35} />
          <View style={styles.rectangleCopy21} />
          <View style={styles.rectangleCopy36} />
          <View style={styles.rectangleCopy23} />
          <View style={styles.rectangleCopy37} />
          <View style={styles.rectangleCopy18} />
          <View style={styles.rectangleCopy38} />
        </View>
        <Image
          style={styles.path3Copy2}
          resizeMode="cover"
          source={require("../assets/path-3-copy-2.png")}
        />
        <Image
          style={styles.path3Copy3}
          resizeMode="cover"
          source={require("../assets/path-3-copy-3.png")}
        />
      </View>
      <View style={styles.calendaView}>
        <View style={styles.rectangleCopy310} />
        <Text style={styles.june2020Text}>June, 2020</Text>
        <Image
          style={styles.iconsLineLeftArrowLongCop}
          resizeMode="cover"
          source={require("../assets/22-iconslineleft-arrow-long-copy.png")}
        />
        <Image
          style={styles.iconsLineLeftArrowLongCop1}
          resizeMode="cover"
          source={require("../assets/22-iconslineleft-arrow-long-copy-2.png")}
        />
        <View style={styles.groupView3}>
          <View style={styles.rectangleCopy4} />
          <Text style={styles.copy2Text}>15</Text>
          <Image
            style={styles.ovalIcon}
            resizeMode="cover"
            source={require("../assets/oval6.png")}
          />
        </View>
        <Text style={styles.monText}>Mon</Text>
        <Text style={styles.copyText}>5</Text>
        <Text style={styles.copyText1}>7</Text>
        <Text style={styles.copyText2}>9</Text>
        <Text style={styles.copyText3}>6</Text>
        <Text style={styles.copyText4}>8</Text>
        <Text style={styles.copyText5}>10</Text>
        <Text style={styles.copyText6}>11</Text>
        <Text style={styles.text}>19</Text>
        <Text style={styles.text1}>26</Text>
        <Text style={styles.text2}>21</Text>
        <Text style={styles.text3}>28</Text>
        <Text style={styles.text4}>23</Text>
        <Text style={styles.text5}>30</Text>
        <Text style={styles.text6}>20</Text>
        <Text style={styles.text7}>27</Text>
        <Text style={styles.text8}>22</Text>
        <Text style={styles.text9}>29</Text>
        <Text style={styles.text10}>24</Text>
        <Text style={styles.text11}>31</Text>
        <Text style={styles.text12}>25</Text>
        <Text style={styles.copy2Text1}>12</Text>
        <Text style={styles.copy2Text2}>14</Text>
        <Text style={styles.copy2Text3}>16</Text>
        <Text style={styles.copy2Text4}>13</Text>
        <Text style={styles.copy2Text5}>17</Text>
        <Text style={styles.copy2Text6}>18</Text>
        <Text style={styles.wedText}>Wed</Text>
        <Text style={styles.friText}>Fri</Text>
        <Text style={styles.text13}>2</Text>
        <Text style={styles.text14}>1</Text>
        <Text style={styles.text15}>3</Text>
        <Text style={styles.text16}>4</Text>
        <Text style={styles.tueText}>Tue</Text>
        <Text style={styles.thuText}>Thu</Text>
        <Text style={styles.satText}>Sat</Text>
        <Text style={styles.sunText}>Sun</Text>
        <Image
          style={styles.ovalCopyIcon}
          resizeMode="cover"
          source={require("../assets/oval-copy.png")}
        />
        <Image
          style={styles.ovalCopy3}
          resizeMode="cover"
          source={require("../assets/oval-copy-3.png")}
        />
      </View>
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleCopy311} />
      <View style={styles.tabbarView}>
        <View style={styles.groupView4}>
          <Text style={styles.ongoingText}>Ongoing</Text>
          <View style={styles.rectangleCopy2} />
        </View>
        <Text style={styles.historyText}>History</Text>
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
              <Text style={styles.text17}>9:4</Text>1
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
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f4f4",
  },
  rectangleCopy3: {
    position: "absolute",
    height: "79.88%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "20.12%",
    left: "0%",
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
  },
  rectangleCopy5: {
    position: "absolute",
    height: "20.12%",
    width: "100%",
    top: "79.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
  },
  groupView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(140, 136, 175, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  remindMe1hInAdva: {
    position: "absolute",
    transform: [
      {
        translateY: 123.2,
      },
    ],
    top: "50%",
    left: 12,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 170,
  },
  toggle5FocusON: {
    position: "absolute",
    transform: [
      {
        translateY: 116.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 52,
    height: 30.65,
  },
  rectangleCopy10: {
    position: "absolute",
    transform: [
      {
        translateY: -147.5,
      },
    ],
    top: "50%",
    left: 10,
    borderRadius: 8,
    backgroundColor: "#8f9bb3",
    width: 114,
    height: 64.17,
  },
  mensHaircutsText: {
    position: "absolute",
    transform: [
      {
        translateY: -54.23,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 135,
  },
  pMText: {
    position: "absolute",
    transform: [
      {
        translateY: -54.23,
      },
    ],
    top: "50%",
    right: 12,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "right",
    width: 99,
  },
  path3Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -69.09,
      },
    ],
    top: "50%",
    right: 9.5,
    left: 9.5,
    maxWidth: "100%",
    height: 1,
  },
  jessieRobertsonText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 21,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 168,
  },
  iconsFilledGridCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -8.04,
      },
    ],
    top: "50%",
    left: 0,
    width: 16,
    height: 15.32,
  },
  groupView1: {
    position: "absolute",
    transform: [
      {
        translateY: -25.49,
      },
    ],
    top: "50%",
    left: 10,
    width: 189,
    height: 18,
  },
  pagacDriveChi: {
    position: "absolute",
    transform: [
      {
        translateY: 18,
      },
    ],
    top: "50%",
    left: 17,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 181,
    opacity: 0.56,
  },
  margueriteCrossDay: {
    position: "absolute",
    transform: [
      {
        translateY: -32,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 159,
  },
  iconsFilledLocation: {
    position: "absolute",
    transform: [
      {
        translateY: 19,
      },
    ],
    top: "50%",
    left: 0,
    width: 12,
    height: 12,
  },
  group25Copy: {
    position: "absolute",
    transform: [
      {
        translateY: -147.5,
      },
    ],
    top: "50%",
    left: 136,
    width: 198,
    height: 64,
  },
  scanBarcodeText: {
    position: "absolute",
    transform: [
      {
        translateY: 42.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 95,
  },
  rectangleView: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 178,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy25: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 91,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy39: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 5,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy11: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 173,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy26: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 86,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy40: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 0,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy13: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 167,
    backgroundColor: "#222b45",
    width: 3,
    height: 60,
  },
  rectangleCopy27: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 80,
    backgroundColor: "#222b45",
    width: 3,
    height: 60,
  },
  rectangleCopy16: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 149,
    backgroundColor: "#222b45",
    width: 3,
    height: 60,
  },
  rectangleCopy28: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 62,
    backgroundColor: "#222b45",
    width: 3,
    height: 60,
  },
  rectangleCopy19: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 130,
    backgroundColor: "#222b45",
    width: 3,
    height: 60,
  },
  rectangleCopy29: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 43,
    backgroundColor: "#222b45",
    width: 3,
    height: 60,
  },
  rectangleCopy22: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 110,
    backgroundColor: "#222b45",
    width: 4,
    height: 60,
  },
  rectangleCopy30: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 23,
    backgroundColor: "#222b45",
    width: 4,
    height: 60,
  },
  rectangleCopy17: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 139,
    backgroundColor: "#222b45",
    width: 8,
    height: 60,
  },
  rectangleCopy31: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 52,
    backgroundColor: "#222b45",
    width: 8,
    height: 60,
  },
  rectangleCopy24: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 97,
    backgroundColor: "#222b45",
    width: 8,
    height: 60,
  },
  rectangleCopy32: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 10,
    backgroundColor: "#222b45",
    width: 8,
    height: 60,
  },
  rectangleCopy14: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 161,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy33: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 74,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy20: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 123,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy34: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 36,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy15: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 156,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy35: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 69,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy21: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 119,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy36: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 32,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy23: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 106,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy37: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 19,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy18: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 135,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  rectangleCopy38: {
    position: "absolute",
    transform: [
      {
        translateY: -30,
      },
    ],
    top: "50%",
    right: 48,
    backgroundColor: "#222b45",
    width: 2,
    height: 60,
  },
  groupView2: {
    position: "absolute",
    transform: [
      {
        translateY: 21.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 180,
    height: 60,
  },
  path3Copy2: {
    position: "absolute",
    transform: [
      {
        translateY: 6.09,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    maxWidth: "100%",
    height: 1.92,
  },
  path3Copy3: {
    position: "absolute",
    transform: [
      {
        translateY: 96.5,
      },
    ],
    top: "50%",
    right: 6.5,
    left: 7.5,
    maxWidth: "100%",
    height: 1,
  },
  appointmentView: {
    position: "absolute",
    transform: [
      {
        translateY: 28,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 323,
    overflow: "hidden",
  },
  rectangleCopy310: {
    position: "absolute",
    transform: [
      {
        translateY: -153.5,
      },
    ],
    top: "50%",
    right: 0,
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
    height: 307,
  },
  june2020Text: {
    position: "absolute",
    transform: [
      {
        translateY: -137.5,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 76,
  },
  iconsLineLeftArrowLongCop: {
    position: "absolute",
    top: 13.56,
    left: 12,
    width: 24,
    height: 23.24,
  },
  iconsLineLeftArrowLongCop1: {
    position: "absolute",
    top: 13.56,
    right: 12,
    width: 24,
    height: 23.24,
  },
  rectangleCopy4: {
    position: "absolute",
    height: "96.85%",
    width: "100%",
    top: "1.12%",
    right: "0%",
    bottom: "2.03%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#ff7e00",
  },
  copy2Text: {
    position: "absolute",
    transform: [
      {
        translateY: -9.18,
      },
      {
        translateX: -8,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
    width: 17,
  },
  ovalIcon: {
    position: "absolute",
    height: "12.11%",
    width: "12.5%",
    top: "78.6%",
    right: "42.5%",
    bottom: "9.3%",
    left: "45%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  groupView3: {
    position: "absolute",
    transform: [
      {
        translateY: 16.5,
      },
      {
        translateX: -12.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  monText: {
    position: "absolute",
    transform: [
      {
        translateY: -92.71,
      },
      {
        translateX: -160.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 24,
  },
  copyText: {
    position: "absolute",
    transform: [
      {
        translateY: -15.29,
      },
      {
        translateX: -153.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 10,
  },
  copyText1: {
    position: "absolute",
    transform: [
      {
        translateY: -15.29,
      },
      {
        translateX: -49.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 9,
  },
  copyText2: {
    position: "absolute",
    transform: [
      {
        translateY: -15.29,
      },
      {
        translateX: 51.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 10,
  },
  copyText3: {
    position: "absolute",
    transform: [
      {
        translateY: -15.29,
      },
      {
        translateX: -101.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 10,
  },
  copyText4: {
    position: "absolute",
    transform: [
      {
        translateY: -15.29,
      },
      {
        translateX: 3.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 10,
  },
  copyText5: {
    position: "absolute",
    transform: [
      {
        translateY: -15.29,
      },
      {
        translateX: 92.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 17,
  },
  copyText6: {
    position: "absolute",
    transform: [
      {
        translateY: -15.29,
      },
      {
        translateX: 142.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 15,
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: 69.93,
      },
      {
        translateX: -157,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 17,
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: 116.41,
      },
      {
        translateX: -158,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 19,
  },
  text2: {
    position: "absolute",
    transform: [
      {
        translateY: 69.93,
      },
      {
        translateX: -52.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 16,
  },
  text3: {
    position: "absolute",
    transform: [
      {
        translateY: 116.41,
      },
      {
        translateX: -54.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 19,
  },
  text4: {
    position: "absolute",
    transform: [
      {
        translateY: 69.93,
      },
      {
        translateX: 47,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 19,
  },
  text5: {
    position: "absolute",
    transform: [
      {
        translateY: 116.41,
      },
      {
        translateX: 47,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 19,
  },
  text6: {
    position: "absolute",
    transform: [
      {
        translateY: 69.93,
      },
      {
        translateX: -106,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 19,
  },
  text7: {
    position: "absolute",
    transform: [
      {
        translateY: 116.41,
      },
      {
        translateX: -105.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 18,
  },
  text8: {
    position: "absolute",
    transform: [
      {
        translateY: 69.93,
      },
      {
        translateX: -0.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 18,
  },
  text9: {
    position: "absolute",
    transform: [
      {
        translateY: 116.41,
      },
      {
        translateX: -1.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 19,
  },
  text10: {
    position: "absolute",
    transform: [
      {
        translateY: 69.93,
      },
      {
        translateX: 91.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 19,
  },
  text11: {
    position: "absolute",
    transform: [
      {
        translateY: 116.41,
      },
      {
        translateX: 92.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 17,
  },
  text12: {
    position: "absolute",
    transform: [
      {
        translateY: 69.93,
      },
      {
        translateX: 141,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 18,
  },
  copy2Text1: {
    position: "absolute",
    transform: [
      {
        translateY: 27.32,
      },
      {
        translateX: -156.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 16,
  },
  copy2Text2: {
    position: "absolute",
    transform: [
      {
        translateY: 27.32,
      },
      {
        translateX: -53.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 17,
  },
  copy2Text3: {
    position: "absolute",
    transform: [
      {
        translateY: 27.32,
      },
      {
        translateX: 47.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 17,
  },
  copy2Text4: {
    position: "absolute",
    transform: [
      {
        translateY: 27.32,
      },
      {
        translateX: -105,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 17,
  },
  copy2Text5: {
    position: "absolute",
    transform: [
      {
        translateY: 27.32,
      },
      {
        translateX: 92.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 16,
  },
  copy2Text6: {
    position: "absolute",
    transform: [
      {
        translateY: 27.32,
      },
      {
        translateX: 141.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
    width: 17,
  },
  wedText: {
    position: "absolute",
    transform: [
      {
        translateY: -92.71,
      },
      {
        translateX: -57.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 25,
  },
  friText: {
    position: "absolute",
    transform: [
      {
        translateY: -92.71,
      },
      {
        translateX: 49.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 14,
  },
  text13: {
    position: "absolute",
    transform: [
      {
        translateY: -57.91,
      },
      {
        translateX: 51.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 9,
  },
  text14: {
    position: "absolute",
    transform: [
      {
        translateY: -57.91,
      },
      {
        translateX: 4.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 8,
  },
  text15: {
    position: "absolute",
    transform: [
      {
        translateY: -57.91,
      },
      {
        translateX: 95.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 10,
  },
  text16: {
    position: "absolute",
    transform: [
      {
        translateY: -57.91,
      },
      {
        translateX: 145.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 10,
  },
  tueText: {
    position: "absolute",
    transform: [
      {
        translateY: -92.71,
      },
      {
        translateX: -106.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 20,
  },
  thuText: {
    position: "absolute",
    transform: [
      {
        translateY: -92.71,
      },
      {
        translateX: -2.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 21,
  },
  satText: {
    position: "absolute",
    transform: [
      {
        translateY: -92.71,
      },
      {
        translateX: 91.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 18,
  },
  sunText: {
    position: "absolute",
    transform: [
      {
        translateY: -92.71,
      },
      {
        translateX: 139.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 21,
  },
  ovalCopyIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 90.55,
      },
      {
        translateX: 98.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 5,
    height: 4.84,
  },
  ovalCopy3: {
    position: "absolute",
    height: "1.58%",
    width: "1.45%",
    top: "37.85%",
    right: "20%",
    bottom: "60.57%",
    left: "78.55%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  calendaView: {
    position: "absolute",
    transform: [
      {
        translateY: -291,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 307,
    overflow: "hidden",
  },
  rectangleView1: {
    position: "absolute",
    height: "12.19%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "87.81%",
    left: "0%",
    backgroundColor: "#fff",
  },
  rectangleCopy311: {
    position: "absolute",
    transform: [
      {
        translateY: -307,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  ongoingText: {
    position: "absolute",
    height: "82.76%",
    width: "51.06%",
    top: "0%",
    right: "24.47%",
    bottom: "17.24%",
    left: "24.47%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "center",
  },
  rectangleCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: 13.5,
      },
      {
        translateX: -94,
      },
    ],
    top: "50%",
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#ff7e00",
    width: 188,
    height: 1,
  },
  groupView4: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
      {
        translateX: -156.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 188,
    height: 29,
    overflow: "hidden",
  },
  historyText: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
      {
        translateX: 94.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 62,
  },
  tabbarView: {
    position: "absolute",
    transform: [
      {
        translateY: -335,
      },
    ],
    top: "50%",
    right: 62,
    left: 0,
    height: 29,
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
  groupIcon: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 68,
    height: 12,
    overflow: "hidden",
  },
  text17: {
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
  appointmentOngoingView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AppointmentOngoing;
