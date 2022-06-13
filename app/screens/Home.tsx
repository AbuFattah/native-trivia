import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Screen from "../components/Screen";
import Button from "../components/Button";

const Home: FC<any> = () => {
  return (
    <Screen>
      <Text style={styles.logo}>Trivianz</Text>
      <View>
        <Image
          style={styles.quizImage}
          source={{
            uri: "https://img.freepik.com/free-vector/did-you-know-interesting-fact-design_1017-25704.jpg?t=st=1655148692~exp=1655149292~hmac=66e4f7b6e4d5e02a8ec8a7e220cec8217aeb1bb8b4be61b4f3b961b53715a6b6&w=740",
          }}
        />
      </View>
      <View style={styles.button}>
        <Button title="Get Started" />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 10,
    left: 0,
    width: "100%",
  },
  container: {
    backgroundColor: "pink",
    flex: 1,
  },
  logo: {
    fontSize: 50,
    fontWeight: "400",
  },
  quizImage: {
    marginTop: 30,
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
});
