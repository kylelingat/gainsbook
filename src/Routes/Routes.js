import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator,
} from "../../CustomNavigation";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Calculators") {
              iconName = focused ? "calculator" : "calculator-outline";
            } else if (route.name === "Workouts") {
              iconName = focused ? "barbell" : "barbell-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={FirstScreenNavigator} />
        <Tab.Screen name="Calculators" component={SecondScreenNavigator} />
        <Tab.Screen name="Workouts" component={ThirdScreenNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
