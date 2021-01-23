import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/listItem";

function ListingDetailScreen({ image, discription, price }) {
  return (
    <View style={styles.container}>
      <ListItem
        image={require("../assets/user.jpg")}
        itemName="Ibrahim Arif"
        totalListings="5 listings"
      />
      <TouchableOpacity style={styles.postContainer}>
        <Image style={styles.image} source={require("../assets/couch.jpg")} />
        <View style={styles.detailContainer}>
          <Text style={styles.text}>Red couce for sale!</Text>
          <Text style={[styles.text, { color: colors.secondary }]}>$450</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 40,
  },
  detailContainer: {
    paddingLeft: 14,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "80%",
  },
  text: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    paddingVertical: 3,
  },
  postContainer: {
    height: "50%",
    marginTop: 10,
  },
  userContainer: {
    flexDirection: "row",
    marginLeft: 14,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userTextContainer: {
    marginLeft: 14,
    justifyContent: "center",
  },
});

export default ListingDetailScreen;
