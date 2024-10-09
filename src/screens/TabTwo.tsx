import { View, Text } from "react-native";

import { useStatusBar } from "../hooks/useStatusBar";

const TabTwo = () => {
  useStatusBar("light-content");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#ffffff" }}>Tab Two</Text>
    </View>
  );
};

export default TabTwo;