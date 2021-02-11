import * as React from "react";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";

interface dataLoader {
  url: string;
  navigate: string;
  intervalMs: number;
}
export function DataLoader(params: dataLoader) {
  const navigation = useNavigation();
  const [buttonState, setButtonState] = useState("NotStarted");
  const [{ data, loading, error }, refetch] = useAxios(
    {
      method: "GET",
      url: params.url,
    },
    { manual: true }
  );

  useEffect(() => {
    if (params.url != "") {
      setButtonState("Loading");
      refetch();
    }
  }, [params.url]);

  console.log(
    "params.url: ",
    params.url,
    "\n buttonState: ",
    buttonState,
    "\n data: ",
    data
  );

  if (loading || buttonState == "NotStarted")
    return (
      <View>
        <Button
          icon={<Icon name="ban" type="font-awesome-5" color="#f00" />}
          title="Click Config first"
          disabled={true}
        />
      </View>
    );
  if (error)
    return (
      <Button
        icon={
          <Icon name="exclamation-circle" type="font-awesome-5" color="#f00" />
        }
        title="Error! Config again or close the app"
        disabled={true}
      />
    );

  return (
    <Button
      icon={<Icon name="play-circle" type="font-awesome-5" color="#0F0" />}
      title="START"
      onPress={() => {
        navigation.navigate(params.navigate, {
          data: data,
          intervalMs: params.intervalMs,
        });
      }}
    />
  );
}
