import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import firebase from "firebase";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Seperator from "../components/Seperator";

const getDealer = (dealerId) => {
  let dealer = {};
  firebase
    .database()
    .ref("/users/" + dealerId)
    .on("value", (snapshot) => (dealer = snapshot.val()));

  return dealer;
};

function ListingDetailScreen({ route, navigation }) {
  const { itemDetail } = route.params;
  const [dealer, setDealer] = useState({});

  const {
    imagesURL: { image0: imageUrl },
    price,
    uid,
  } = itemDetail;

  const description = itemDetail.description
    ? itemDetail.description
    : itemDetail.title;

  useEffect(() => {
    setDealer(getDealer(uid));
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
        description={`${
          dealer.totalListings ? dealer.totalListings : "0"
        } listings`}
        image={dealer.image}
        onPress={() => null}
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
