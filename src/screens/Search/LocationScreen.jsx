import React from "react";
import { SearchScreen } from "./SearchScreen";
import { LocationDetailScreen } from "../LocationDetail/LocationDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LocationListStack = createNativeStackNavigator();

export const LocationScreen = () => {
  return;
  <LocationListStack.Navigator>
    <LocationListStack.Screen name="ExplorarLista" component={SearchScreen} />
    <LocationListStack.Screen name="detalle" component={LocationDetailScreen} />
  </LocationListStack.Navigator>;
};
