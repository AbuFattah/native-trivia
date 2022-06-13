import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Screen: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#e4e4e4",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
