import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global.js";
const Screen3 = ({ navigation }) => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.text}>I am screen3</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NestedScreen3", { msg: "From Screen 3" })
        }
        style={globalStyles.button}
      >
        <Text style={globalStyles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen3;
