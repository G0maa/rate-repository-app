if (__DEV__) {
  console.log(window.__REACT_DEVTOOLS_PORT__);
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // requestIdleCallback(() => alert("works!"), { timeout: 1 });
  console.log("test");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Tes2t</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
