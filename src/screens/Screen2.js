import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
const Screen2 = ({ navigation }) => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.text}>I am screen2</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NestedScreen2", { msg: "From Screen 2" })
        }
        style={globalStyles.button}
      >
        <Text style={globalStyles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
