import { style } from "@mui/system";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./EventDetailScreen.styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
import { Link } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'

export const EventDetailScreen = ({ route }) => {
  const { item } = route.params;
  const { currentUser } = useContext(UserContext)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.urlImagen}} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.location}>{item.lugar}</Text>
        <Text style={styles.price}>Fecha: {item.fecha}</Text>
        <Text style={styles.price}>Hora: {item.hora}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={20} color={item.rating >=1? COLORS.orange:COLORS.inactive} />
          <Ionicons name='star' size={20} color={item.rating >=2? COLORS.orange:COLORS.inactive} />
          <Ionicons name='star' size={20} color={item.rating >=3? COLORS.orange:COLORS.inactive} />
          <Ionicons name='star' size={20} color={item.rating >=4? COLORS.orange:COLORS.inactive} />
          <Ionicons name='star' size={20} color={item.rating >=5? COLORS.orange:COLORS.inactive} />
          <Text style={styles.rating}> {item.rating} </Text>
        </View>
        {currentUser && (
          <Link style={styles.webButton} to={{ screen: 'EventDetailWeb', params: { url: item.urlPagina } }}>
            Ir a la web
          </Link>
        )}
        <Text style={styles.description}>{item.descripcion}</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.latitud,
          longitude: item.longitud,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }}
      >
        <Marker
          coordinate={{
            latitude: item.latitud,
            longitude: item.longitud
          }}
          title={item.nombre}
        />
      </MapView>
    </ScrollView>
  );
};
