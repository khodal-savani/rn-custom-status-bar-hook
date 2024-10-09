import { View, Text } from "react-native";

import { useStatusBar } from "../hooks/useStatusBar";

const TabOne = () => {
  useStatusBar("dark-content");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab One</Text>
    </View>
  );
};

export default TabOne;