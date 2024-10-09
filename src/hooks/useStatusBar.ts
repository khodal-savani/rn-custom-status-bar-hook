import { useCallback } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

export const useStatusBar = (style: StatusBarStyle, animated = true) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style, animated);
    }, [])
  );
};