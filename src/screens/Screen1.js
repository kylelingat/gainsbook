import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";

const Screen1 = ({ navigation }) => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.text}>I am screen1</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NestedScreen1", { msg: "From Screen 1" })
        }
        style={globalStyles.button}
      >
        <Text style={globalStyles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;
