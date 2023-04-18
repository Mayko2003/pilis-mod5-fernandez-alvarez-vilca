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

export const SearchScreen = ({ navigation }) => {
  const buscar = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("Detalle", { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.images} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title} </Text>
        <Text style={styles.itemFecha}>{item.fecha} </Text>
      </View>
    </Pressable>
  );

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
