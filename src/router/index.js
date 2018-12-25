import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import SearchScreen from "../screens/searchScreen";
import HomeScreen from "../screens/homeScreen";

const TabNavigator = createBottomTabNavigator({
  searchScreen: SearchScreen,
  home: HomeScreen
});

export default TabNavigator;
