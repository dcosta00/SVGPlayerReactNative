import React from "react";
import useAxios from "axios-hooks";

import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-elements";

interface imageLoaderTypes {
  imageName: string;
}
export default function ImageLoader(params: imageLoaderTypes) {
  const url =
    "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/" + params.imageName;
  const [{ data, loading, error }, refetch] = useAxios({
    method: "GET",
    url: url,
    headers: {
      "x-rapidapi-key": "073a8e828fmsh4a8a5bc784cfc64p1b912bjsn7335e93b25fd",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  });

  if (loading)
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/cardback.png")}
          style={styles.image}
          transition={true}
          resizeMethod="auto"
          resizeMode="contain"
        ></Image>
      </View>
    );
  if (error) return <Text>Error!</Text>;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data[0].img }}
        style={styles.image}
        transition={true}
        resizeMethod="auto"
        resizeMode="contain"
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
  },
  image: {
    height: 315,
    width: 518,
  },
});
