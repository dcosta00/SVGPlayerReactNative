import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ConfigForm } from "../components/ConfigForm";
import { DataLoader } from "../components/DataLoader";

export default function ConfigScreen() {
  const [url, setUrl] = useState("");

  return (
    <View style={styles.container}>
      <ConfigForm setUrl={setUrl} />
      <DataLoader url={url} navigate="Player" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
