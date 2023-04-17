import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  image,
} from "react-native";
import { styles } from "./SearchScreenStyles";
import { data } from "../../api/data";

const buscar = ([item]) => (
  <Pressable>
    <View style={styles.itemContainer}>
      <images source={item.images[0]} styles={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title} </Text>
      <Text style={styles.itemPtice}>{item.price} </Text>
    </View>
  </Pressable>
);

export const SearchScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={data}
        renderItem={buscar}
        heyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
