import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ConfigForm } from "../components/ConfigForm";
import { DataLoader } from "../components/DataLoader";

export default function ConfigScreen() {
  const [url, setUrl] = useState("");
  const [intervalMs, setIntervalMs] = useState(1);

  return (
    <View style={styles.container}>
      <ConfigForm setUrl={setUrl} setIntervalMs={setIntervalMs} />
      <DataLoader url={url} navigate="Player" intervalMs={intervalMs} />
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
