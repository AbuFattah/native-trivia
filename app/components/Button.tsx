import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
interface Props {
  title: string;
  color?: string;
  bgColor?: string;
  style?: {};
}
const Button: FC<Props> = ({
  style,
  title,
  bgColor = "black",
  color = "white",
}) => {
  return (
    <TouchableOpacity style={style} onPress={() => console.log("first")}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={{ color: color, textAlign: "center" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    color: "white",
  },
});
