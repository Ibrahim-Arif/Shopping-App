import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import firebase from "firebase";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Seperator from "../components/Seperator";

function ListingDetailScreen({ route, navigation }) {
  const [totalListings, setTotalListings] = useState("");
  const { itemDetail } = route.params;

  const {
    imagesURL: { image0: imageUrl },
    price,
    dealerId,
    dealer,
  } = itemDetail;

  const description = itemDetail.description
    ? itemDetail.description
    : itemDetail.title;

  const getTotalListings = () => {
    firebase
      .database()
      .ref("/users/" + dealerId + "/totalListings")
      .on("value", (snapshot) => setTotalListings(snapshot.val()));
  };

  useEffect(() => {
    getTotalListings();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.postContainer}
        onPress={() => navigation.navigate("ImageDetail", { imageUrl })}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />

        <View style={styles.detailContainer}>
          <Text style={styles.text}>{description}</Text>
          <Text style={[styles.text, { color: colors.secondary }]}>
            ${price}
          </Text>
        </View>
      </TouchableOpacity>

      <ListItem
        title={dealer.username}
        description={`${totalListings} ${
          totalListings > 1 ? "products" : "product"
        }`}
        image={dealer.image}
        // onPress={() => null}
      />

      <Seperator />
    </View>
  );
}

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
