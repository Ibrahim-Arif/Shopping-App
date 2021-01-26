import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  Alert,
  RefreshControl,
} from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Seperator from "../components/Seperator";
import colors from "../config/colors";

const data = [
  {
    id: 1,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 3,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 4,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 5,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 6,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 7,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 8,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 9,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 10,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 11,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 12,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function MessageScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    console.log("Refreshing.");

    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(d) => d.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title + item.id}
            description={item.description}
            image={item.image}
            onPress={() =>
              Alert.alert("Alert", "Tapped on: " + item.title + item.id)
            }
            renderRightActions={() => <ListItemDeleteAction />}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.dodgerblue]}
          />
        }
        ItemSeparatorComponent={() => <Seperator />}
        ListFooterComponent={() => <Seperator />}
        ListHeaderComponent={<Text style={styles.textTop}>Messages</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },
  textTop: {
    alignSelf: "center",
    color: colors.secondary,
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default MessageScreen;
