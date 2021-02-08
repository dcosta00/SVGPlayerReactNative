import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { RootStackTypes } from "../navigation/RootStackTypes";

import { useEffect, useRef, useState } from "react";
import Countdown from "../components/Countdown";
import ImageLoader from "../components/ImageLoader";

export default function PlayerScreen() {
  const route = useRoute<RouteProp<RootStackTypes, "Player">>();
  console.log("route:", route.params);

  const imagesName = route.params.data.toString().split("\n");
  const [num, setNum] = useState(imagesName.length - 1);
  return (
    <View style={styles.container}>
      <ImageLoader imageName={imagesName[num]}></ImageLoader>
      <Text style={styles.title}>{imagesName[num]}</Text>
      <Countdown
        initialTime={imagesName.length - 1}
        data={imagesName}
        interval={2000}
        num={num}
        setNum={setNum}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    textAlign: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
