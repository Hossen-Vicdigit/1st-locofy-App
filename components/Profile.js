import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

const Profile = ({ style }) => {
  return (
    <View style={[styles.profileView, style]}>
      <View style={styles.backgroundView} />
      <View style={styles.btnlogOutView}>
        <View style={styles.rectangleCopy5} />
        <Image
          style={styles.ovalIcon}
          resizeMode="cover"
          source={require("../assets/oval8.png")}
        />
        <Text style={styles.logOutText}>Log Out</Text>
        <Image
          style={styles.iconsFilledDiscoverCopy7}
          resizeMode="cover"
          source={require("../assets/22-iconsfilleddiscover-copy-7.png")}
        />
      </View>
      <View style={styles.settings2View}>
        <View style={styles.backgroundView1} />
        <View style={styles.btnTermsOfServicesView}>
          <Image
            style={styles.ovalIcon1}
            resizeMode="cover"
            source={require("../assets/oval9.png")}
          />
          <Text style={styles.termsOfServices}>Terms of services</Text>
          <Image
            style={styles.iconsFilledDiscoverCopy5}
            resizeMode="cover"
            source={require("../assets/22-iconsfilleddiscover-copy-5.png")}
          />
        </View>
        <View style={styles.btnsettingsView}>
          <Image
            style={styles.ovalIcon2}
            resizeMode="cover"
            source={require("../assets/oval9.png")}
          />
          <Text style={styles.settingsText}>Settings</Text>
          <Image
            style={styles.iconsFilledDiscoverCopy51}
            resizeMode="cover"
            source={require("../assets/22-iconsfilleddiscover-copy-51.png")}
          />
        </View>
        <View style={styles.btninviteFriendsView}>
          <Image
            style={styles.ovalIcon3}
            resizeMode="cover"
            source={require("../assets/oval9.png")}
          />
          <Text style={styles.inviteFriendsText}>Invite Friends</Text>
          <Image
            style={styles.iconsFilledDiscoverCopy}
            resizeMode="cover"
            source={require("../assets/22-iconsfilleddiscover-copy.png")}
          />
        </View>
        <View style={styles.btnnofiticationsView}>
          <Image
            style={styles.ovalIcon4}
            resizeMode="cover"
            source={require("../assets/oval9.png")}
          />
          <Text style={styles.notificationsText}>Notifications</Text>
          <Image
            style={styles.iconsFilledDiscoverCopy4}
            resizeMode="cover"
            source={require("../assets/22-iconsfilleddiscover-copy-4.png")}
          />
        </View>
        <Image
          style={styles.iconsLineRightArrowCopy8}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
        <Image
          style={styles.iconsLineRightArrowCopy81}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
        <Image
          style={styles.iconsLineRightArrowCopy82}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
        <Image
          style={styles.iconsLineRightArrowCopy83}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
      </View>
      <View style={styles.settings1View}>
        <View style={styles.backgroundView2} />
        <View style={styles.btnpaymentMethodsView}>
          <Image
            style={styles.ovalIcon5}
            resizeMode="cover"
            source={require("../assets/oval9.png")}
          />
          <Text style={styles.paymentMethodsText}>Payment Methods</Text>
          <Image
            style={styles.iconsFilledDiscover}
            resizeMode="cover"
            source={require("../assets/22-iconsfilleddiscover.png")}
          />
        </View>
        <View style={styles.btnaccountInforView}>
          <Image
            style={styles.ovalIcon6}
            resizeMode="cover"
            source={require("../assets/oval9.png")}
          />
          <Text style={styles.accountInformationText}>Account Information</Text>
          <Image
            style={styles.iconsFilledDiscoverCopy2}
            resizeMode="cover"
            source={require("../assets/22-iconsfilleddiscover-copy-2.png")}
          />
        </View>
        <Image
          style={styles.iconsLineRightArrowCopy84}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
        <Image
          style={styles.iconsLineRightArrowCopy85}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
      </View>
      <View style={styles.inforView}>
        <Image
          style={styles.ovalIcon7}
          resizeMode="cover"
          source={require("../assets/oval15.png")}
        />
        <Text style={styles.theresaCohenText}>Theresa Cohen</Text>
        <Text style={styles.theresaCohen68examText}>
          theresa_cohen68@example.com
        </Text>
      </View>
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.groupIcon}
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
    height: "73.28%",
    width: "100%",
    top: "26.72%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f4f4",
  },
  rectangleCopy5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
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
  ovalIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -17,
      },
    ],
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  logOutText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 58,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscoverCopy7: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 17,
    width: 24,
    height: 24,
  },
  btnlogOutView: {
    position: "absolute",
    transform: [
      {
        translateY: 234,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 74,
    overflow: "hidden",
  },
  backgroundView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
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
  ovalIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: -17,
      },
    ],
    top: "50%",
    left: 0,
    width: 34,
    height: 34,
  },
  termsOfServices: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 46,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscoverCopy5: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 5,
    width: 24,
    height: 24,
  },
  btnTermsOfServicesView: {
    position: "absolute",
    transform: [
      {
        translateY: 71.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 159,
    height: 34,
    overflow: "hidden",
  },
  ovalIcon2: {
    position: "absolute",
    height: "100%",
    width: "34%",
    top: "0%",
    right: "66%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  settingsText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "54%",
    top: "50%",
    right: "0%",
    left: "46%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscoverCopy51: {
    position: "absolute",
    height: "70.59%",
    width: "24%",
    top: "14.71%",
    right: "71%",
    bottom: "14.71%",
    left: "5%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btnsettingsView: {
    position: "absolute",
    transform: [
      {
        translateY: 12.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 100,
    height: 34,
    overflow: "hidden",
  },
  ovalIcon3: {
    position: "absolute",
    height: "100%",
    width: "25.56%",
    top: "0%",
    right: "74.44%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  inviteFriendsText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "65.41%",
    top: "50%",
    right: "0%",
    left: "34.59%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscoverCopy: {
    position: "absolute",
    height: "70.59%",
    width: "18.05%",
    top: "14.71%",
    right: "78.2%",
    bottom: "14.71%",
    left: "3.76%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btninviteFriendsView: {
    position: "absolute",
    transform: [
      {
        translateY: -46.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 133,
    height: 34,
    overflow: "hidden",
  },
  ovalIcon4: {
    position: "absolute",
    height: "100%",
    width: "26.36%",
    top: "0%",
    right: "73.64%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  notificationsText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "64.34%",
    top: "50%",
    right: "0%",
    left: "35.66%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscoverCopy4: {
    position: "absolute",
    height: "70.59%",
    width: "18.6%",
    top: "14.71%",
    right: "77.52%",
    bottom: "14.71%",
    left: "3.88%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btnnofiticationsView: {
    position: "absolute",
    transform: [
      {
        translateY: -105.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 129,
    height: 34,
    overflow: "hidden",
  },
  iconsLineRightArrowCopy8: {
    position: "absolute",
    transform: [
      {
        translateY: 79.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  iconsLineRightArrowCopy81: {
    position: "absolute",
    transform: [
      {
        translateY: 20.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  iconsLineRightArrowCopy82: {
    position: "absolute",
    transform: [
      {
        translateY: -38.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  iconsLineRightArrowCopy83: {
    position: "absolute",
    transform: [
      {
        translateY: -97.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  settings2View: {
    position: "absolute",
    transform: [
      {
        translateY: -29,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 251,
    overflow: "hidden",
  },
  backgroundView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
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
  ovalIcon5: {
    position: "absolute",
    height: "100%",
    width: "20.73%",
    top: "0%",
    right: "79.27%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  paymentMethodsText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "71.95%",
    top: "50%",
    right: "0%",
    left: "28.05%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscover: {
    position: "absolute",
    height: "70.59%",
    width: "14.63%",
    top: "14.71%",
    right: "82.32%",
    bottom: "14.71%",
    left: "3.05%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btnpaymentMethodsView: {
    position: "absolute",
    transform: [
      {
        translateY: -46.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 164,
    height: 34,
    overflow: "hidden",
  },
  ovalIcon6: {
    position: "absolute",
    height: "100%",
    width: "19.1%",
    top: "0%",
    right: "80.9%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  accountInformationText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "74.16%",
    top: "50%",
    right: "0%",
    left: "25.84%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscoverCopy2: {
    position: "absolute",
    height: "70.59%",
    width: "13.48%",
    top: "14.71%",
    right: "83.71%",
    bottom: "14.71%",
    left: "2.81%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btnaccountInforView: {
    position: "absolute",
    transform: [
      {
        translateY: 12.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 178,
    height: 34,
    overflow: "hidden",
  },
  iconsLineRightArrowCopy84: {
    position: "absolute",
    transform: [
      {
        translateY: -38.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  iconsLineRightArrowCopy85: {
    position: "absolute",
    transform: [
      {
        translateY: 20.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  settings1View: {
    position: "absolute",
    transform: [
      {
        translateY: -174,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 133,
    overflow: "hidden",
  },
  ovalIcon7: {
    position: "absolute",
    height: "58.11%",
    width: "40.19%",
    top: "0%",
    right: "28.5%",
    bottom: "41.89%",
    left: "31.31%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  theresaCohenText: {
    position: "absolute",
    transform: [
      {
        translateY: 24,
      },
    ],
    width: "63.08%",
    top: "50%",
    right: "18.22%",
    left: "18.69%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
  },
  theresaCohen68examText: {
    position: "absolute",
    transform: [
      {
        translateY: 56,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
  },
  inforView: {
    position: "absolute",
    transform: [
      {
        translateY: -357,
      },
      {
        translateX: -106.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 214,
    height: 148,
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
  },
  groupIcon: {
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
  profileView: {
    position: "relative",
    backgroundColor: "#fff",
    width: 375,
    height: 812,
    overflow: "hidden",
  },
});

export default Profile;
