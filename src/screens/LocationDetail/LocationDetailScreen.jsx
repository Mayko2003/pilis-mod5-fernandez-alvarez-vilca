import { style } from "@mui/system";
import React from "react";
import { View, Text, ScrollView, image } from "react-native";
import { styles } from "../Search/SearchScreenStyles";

export const LocationDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <ScrollView style={styles.container}>
      <view style={styles.imagContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer} />
        {item.images.map((image, idx) => (
          <image
            key={idx}
            source={image}
            Style={style.image}
            resizeMode="cover"
          ></image>
        ))}
      </view>
    </ScrollView>
  );
};
