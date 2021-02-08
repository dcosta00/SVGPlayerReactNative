import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ConfigScreen from "./screens/ConfigScreen";
import PlayerScreen from "./screens/PlayerScreen";
import { RootStackTypes } from "./navigation/RootStackTypes";

const RootStack = createStackNavigator<RootStackTypes>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Config">
          <RootStack.Screen name="Config" component={ConfigScreen} />
          <RootStack.Screen name="Player" component={PlayerScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
}

export default App;
