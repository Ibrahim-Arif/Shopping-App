import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  RefreshControl,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Back from "../components/Back";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/Listing";
import Screen from "../components/Screen";

function ListingScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [listings, setListings] = useState([]);

  const loadListing = async () => {
    const response = await listingApi.getListings();
    setListings(response.data);
  };

  useEffect(() => {
    loadListing();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadListing();
    setRefreshing(false);
  };

  return (
    <Screen style={{ backgroundColor: colors.lightgrey }}>
      {/* <View style={styles.containerTop}>
        <Back color={colors.secondary} onPress={() => null} />

        <Text style={[styles.textTop]}>New Arrival</Text>

        <TouchableOpacity onPress={() => null}>
          <Entypo name="list" size={28} color={colors.secondary} />
        </TouchableOpacity>
      </View> */}

      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.images[0].url}
              description={item.description ? item.description : item.title}
              price={item.price}
              onPress={() =>
                navigation.navigate("ListingDetail", {
                  imageUrl: item.images[0].url,
                  description: item.description ? item.description : item.title,
                  price: item.price,
                })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[colors.secondary]}
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  containerTop: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  textTop: {
    color: colors.secondary,
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ListingScreen;
