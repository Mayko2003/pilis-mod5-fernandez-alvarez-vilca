import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey,
  },
  itemContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemList: {
    marginBottom: 60,
  },
  itemImage: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  itemTitle: {
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 10,
  },
  itemPrice: {
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  itemFecha: {
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    marginLeft: 10,
  },
});
