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
  },
  {
    id: 2,
    title: "user",
    description: "Is product avaliable?",
  },
  {
    id: 3,
    title: "user",
    description: "Is product avaliable?",
  },
  {
    id: 4,
    title: "user",
    description: "Is product avaliable?",
  },
  {
    id: 5,
    title: "user",
    description: "Is product avaliable?",
  },
  {
    id: 6,
    title: "user",
    description: "Is product avaliable?",
  },
  {
    id: 7,
    title: "user",
    description: "Is product avaliable?",
  },
];

function MessageScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const image =
    "https://firebasestorage.googleapis.com/v0/b/dawn-bcee8.appspot.com/o/user.jpg?alt=media&token=3ecf406b-e0ef-4856-9844-d371c0fc2436";

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
              image={image}
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
