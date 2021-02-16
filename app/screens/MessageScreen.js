import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Alert,
  RefreshControl,
  View,
} from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import Screen from "../components/Screen";
import TopTitle from "../components/TopTitle";

const initialMessages = [
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
  {
    id: 13,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 14,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 15,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
  {
    id: 16,
    title: "user",
    description: "Is product avaliable?",
    image: require("../assets/user.jpg"),
  },
];

function MessageScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const onRefresh = () => {
    setRefreshing(true);
    setMessages(initialMessages);
    setRefreshing(false);
  };

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <TopTitle
        title="Messages"
        rightIcon="plus"
        color={colors.secondary}
        onPressBack={() => navigation.navigate("Account")}
      />

      <View style={styles.containerList}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title + item.id}
              description={item.description}
              image={item.image}
              rightIcon={true}
              onPress={() =>
                Alert.alert("Alert", "Tapped on: " + item.title + item.id)
              }
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              style={{ padding: 5 }}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[colors.secondary]}
            />
          }
          ItemSeparatorComponent={() => <Seperator />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
  },
});

export default MessageScreen;
