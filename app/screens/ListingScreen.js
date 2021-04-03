import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, Text, RefreshControl } from "react-native";
import firebase from "firebase";
import _ from "lodash";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import MyButton from "../components/MyButton";
import OfflineNotice from "../components/OfflineNotice";
import LoadingScreen from "../screens/LoadingScreen";

function ListingScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const _loadListing = () => {
    let data = [];
    setLoading(true);
    setError(false);

    try {
      console.log("inside");
      firebase
        .database()
        .ref("/listings")
        .on("value", (snapshot) => {
          console.log("inside");
          data = _.map(snapshot.val(), (val, key) => {
            return { ...val, key };
          });

          setListings(data.reverse());
          setLoading(false);
        });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    _loadListing();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    _loadListing();
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
              onPress={() => _loadListing()}
              style={{ width: "90%" }}
            />
          </View>
        )}

        <View style={styles.container}>
          <FlatList
            data={listings}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Card
                imageUrl={item.imagesURL.image0}
                description={item.description ? item.description : item.title}
                price={item.price}
                onPress={() =>
                  navigation.navigate("ListingDetail", {
                    itemDetail: item,
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
