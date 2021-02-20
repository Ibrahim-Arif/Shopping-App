import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Seperator from "../components/Seperator";

function ListingDetailScreen({ route, navigation }) {
  const { imageUrl, description, price } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.postContainer}
        onPress={() => navigation.navigate("ImageDetail", { imageUrl })}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />

        <View style={styles.detailContainer}>
          {description && <Text style={styles.text}>{description}</Text>}
          <Text style={[styles.text, { color: colors.secondary }]}>
            ${price}
          </Text>
        </View>
      </TouchableOpacity>

      <Seperator />

      <ListItem
        title="Ibrahim Arif"
        description="5 listings"
        image={require("../assets/user.jpg")}
        onPress={() => null}
      />
    </View>
  );
}
0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    flex: 0.6,
  },
  detailContainer: {
    paddingLeft: 15,
    paddingVertical: 5,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    paddingVertical: 2,
  },
});

export default ListingDetailScreen;
