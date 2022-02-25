import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MybagScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewStyle1}>
        <Text>Hello</Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  viewStyle1: {
    flex: 1,
  },
});

export default MybagScreen;
