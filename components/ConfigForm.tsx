import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "react-native-elements";

import { StyleSheet, View } from "react-native";

export function ConfigForm(params: any) {
  type FormInputs = {
    url: string;
    intervalMs: string;
  };
  const { register, setValue, handleSubmit, errors } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      url: "http://342yg.mocklab.io/api/",
      intervalMs: "1000",
    },
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const onSubmit = (data: any) => {
    console.log("Submit ", data);
    params.setUrl(data.url);
    params.setIntervalMs(data.intervalMs);
  };

  React.useEffect(() => {
    register({ name: "url" });
    register({ name: "intervalMs" });
  }, [register]);

  return (
    <View style={styles.container}>
      <Input
        label={"URL"}
        placeholder={"Api Url"}
        onChangeText={(value) => {
          setValue("url", value);
        }}
      />
      <Input
        label={"Interval (ms)"}
        placeholder={"Interval in Ms. Default 1000."}
        onChangeText={(value) => {
          setValue("intervalMs", value);
        }}
      />

      <Button onPress={handleSubmit(onSubmit)} title="CONFIG" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 300,
    alignSelf: "center",
  },
});
