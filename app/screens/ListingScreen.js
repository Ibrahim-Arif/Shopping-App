import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  RefreshControl,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Back from "../components/Back";

const items = [
  {
    id: 1,
    img: require("../assets/jacket.jpg"),
    description: "Red jacket for sale",
    price: "250",
  },
  {
    id: 2,
    img: require("../assets/couch.jpg"),
    description: "Comfortable couce with pillows!",
    price: "700",
  },
  {
    id: 3,
    img: require("../assets/background2.jpg"),
    description: "Red jacket for sale",
    price: "250",
  },
  {
    id: 4,
    img: require("../assets/background1.jpg"),
    description: "Comfortable couce with pillows!",
    price: "700",
  },
];

function ListingScreen(props) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    for (let i = 0; i < 10000000; i++);
    setRefreshing(false);
  };

  return (
    <Screen style={{ backgroundColor: colors.lightgrey }}>
      <View style={styles.containerTop}>
        <Back color={colors.secondary} onPress={() => null} />

        <Text style={[styles.textTop]}>New Arrival</Text>

        <TouchableOpacity>
          <Entypo name="list" size={28} color={colors.secondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              img={item.img}
              description={item.description}
              price={item.price}
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
