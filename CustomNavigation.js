import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NestedScreen from "./src/screens/NestedScreen";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import { globalHeaderStyle } from "./src/styles/global.js";

const Stack = createStackNavigator();

const headerStyleSheet = {
  title: "My home",
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={globalHeaderStyle}
      />
      <Stack.Screen name="NestedScreen1" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { FirstScreenNavigator };

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={globalHeaderStyle}
      />
      <Stack.Screen name="NestedScreen2" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { SecondScreenNavigator };

const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={globalHeaderStyle}
      />
      <Stack.Screen name="NestedScreen3" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { ThirdScreenNavigator };
