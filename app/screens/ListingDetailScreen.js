import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Seperator from "../components/Seperator";

function ListingDetailScreen({ route, navigation }) {
  const { image, description, price } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerPost}
        onPress={() => navigation.navigate("ImageDetail", { image })}
      >
        <Image style={styles.image} source={image} />

        <View style={styles.containerDetail}>
          <Text style={styles.text}>{description}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  containerPost: {
    height: "50%",
  },

  containerDetail: {
    paddingLeft: 14,
  },

  image: {
    width: "100%",
    height: "80%",
  },

  text: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    paddingVertical: 2,
  },
});

export default ListingDetailScreen;
