const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Discover from "./screens/Discover";
import Calls from "./screens/Calls";
import AppointmentOngoing from "./screens/AppointmentOngoing";
import Nearby from "./screens/Nearby";
import Component9 from "./components/Component9";
import Component8 from "./components/Component8";
import Component7 from "./components/Component7";
import Component6 from "./components/Component6";
import Component5 from "./components/Component5";
import Component4 from "./components/Component4";
import Component3 from "./components/Component3";
import Component2 from "./components/Component2";
import Component1 from "./components/Component1";
import Component from "./components/Component";
import Profile from "./screens/Profile"

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Component8 />,
    <Component6 />,
    <Component4 />,
    <Component2 />,
    <Component />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Component9 />,
    <Component7 />,
    <Component5 />,
    <Component3 />,
    <Component1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              height: 68,
              width: "100%",
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={{ flex: 1 }}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index ? bottomTabItemsActive[index] || item : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
      <Tab.Screen name="Nearby" component={Nearby} options={{ headerShown: false }} />
      <Tab.Screen
        name="AppointmentOngoing"
        component={AppointmentOngoing}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Calls" component={Calls} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
// hi