import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, Text, RefreshControl } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/Listing";
import Screen from "../components/Screen";
import MyButton from "../components/MyButton";
import useApi from "../hooks/useApi";
import OfflineNotice from "../components/OfflineNotice";
import LoadingScreen from "../screens/LoadingScreen";

function ListingScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const { data: listings, error, loading, request: loadListing } = useApi(
    listingApi.getListings
  );

  useEffect(() => {
    loadListing();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadListing();
    setRefreshing(false);
  };

  return (
    <>
      {loading && <LoadingScreen color={colors.primary} />}
      <Screen style={{ backgroundColor: colors.lightgrey }}>
        <OfflineNotice />

        {error && (
          <View style={styles.loading}>
            <Text style={styles.errortext}>
              Error occured! While loading...
            </Text>
            <MyButton
              color={colors.primary}
              title="Retry"
              onPress={() => loadListing()}
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
                thumbnailUrl={item.images[0].thumbnailUrl}
                description={item.description ? item.description : item.title}
                price={item.price}
                onPress={() =>
                  navigation.navigate("ListingDetail", {
                    imageUrl: item.images[0].url,
                    description: item.description
                      ? item.description
                      : item.title,
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  errortext: {
    color: colors.danger,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  loading: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListingScreen;
