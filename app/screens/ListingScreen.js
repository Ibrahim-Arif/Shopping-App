import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, Text, RefreshControl } from "react-native";

import Back from "../components/Back";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/Listing";
import Screen from "../components/Screen";
import MyButton from "../components/MyButton";

function ListingScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [listings, setListings] = useState([]);
  const [isError, setIsError] = useState(false);

  const loadListing = async () => {
    const response = await listingApi.getListings();
    response.ok ? setIsError(false) : setIsError(true);
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
      </View> */}

      {isError && (
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.errortext}>Error occured! While loading...</Text>
          <MyButton
            title="Retry"
            color={colors.primary}
            style={{ width: "90%" }}
          />
        </View>
      )}

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
  errortext: {
    color: colors.danger,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textTop: {
    color: colors.secondary,
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ListingScreen;
