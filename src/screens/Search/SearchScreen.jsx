import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { styles } from "./SearchScreenStyles";
import { SearchBar } from "../../components/SearchBar";
import { getEvents } from "../../api/events.service";

export const SearchScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [eventList, setEventList] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const filteredEvents = eventList.filter(event => (
    event.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  ))


  const buscar = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("EventDetail", { item })}>
      <View style={styles.itemContainer}>
        <Image source={{uri: item.urlImagen}} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.nombre} </Text>
        <Text style={styles.itemFecha}>Fecha: {item.fecha} Hora: {item.hora} </Text>
      </View>
    </Pressable>
  );


  useEffect(() => {
    getEvents().then(res => {
        setEventList(res)
    })
  }, [])

  return (
    <SafeAreaView styles={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredEvents}
        renderItem={buscar}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
