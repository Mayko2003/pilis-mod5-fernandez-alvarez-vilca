import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { styles } from "./SearchScreenStyles";
import { data } from "../../api/data";

const buscar = ({ item }) => (
  <Pressable>
    <View style={styles.itemContainer}>
      <Image source={item.images[0]} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title} </Text>
      <Text style={styles.itemFecha}>{item.fecha} </Text>
    </View>
  </Pressable>
);

export const SearchScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={data}
        renderItem={buscar}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
