import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

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
  const [loading, setLoading] = useState(false);

  const loadListing = async () => {
    // console.log("inside load listing method");
    setLoading(true);
    const response = await listingApi.getListings();
    setLoading(false);

    if (!response.ok) return setIsError(true);

    setIsError(false);
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
            color={colors.primary}
            title="Retry"
            onPress={() => loadListing()}
            style={{ width: "90%" }}
          />
        </View>
      )}

      <View style={styles.container}>
        {loading && (
          <View style={{ height: "100%", justifyContent: "center" }}>
            <ActivityIndicator
              animating={true}
              color={colors.primary}
              size={50}
            />
          </View>
        )}

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
