import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

interface CountdownType {
  initialTime: number;
  data: Array<string>;
  interval: number;
  num: number;
  setNum: any;
}
export default function Countdown(params: CountdownType) {
  const [pause, setPause] = useState(true);
  const [changeState, setChangeState] = useState("Run");

  let intervalRef = useRef<any | null>();
  const decreaseNum = () => {
    params.setNum((prev: number) => {
      if (prev > 0) {
        prev = prev - 1;
      } else {
        setChangeState("Restart");
        setPause(true);
      }
      return prev;
    });
  };

  useEffect(() => {
    if (!pause) {
      intervalRef.current = setInterval(decreaseNum, params.interval);
    }
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      if (params.num > 0) {
        intervalRef.current = setInterval(decreaseNum, params.interval);
      } else {
        params.setNum(params.initialTime);
        setPause(false);
        clearInterval(intervalRef.current);
      }
    }
    setPause((prev) => !prev);
    if (!pause || changeState == "Restart") {
      setChangeState("Run");
    } else {
      setChangeState("Pause");
    }
  };
  return (
    <View>
      <Button onPress={handleClick} title={changeState} style={styles.button} />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    width: 300,
    alignSelf: "center",
  },
});
