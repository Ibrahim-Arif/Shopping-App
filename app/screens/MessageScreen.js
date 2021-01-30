import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  Alert,
  RefreshControl,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import Back from "../components/Back";
import Screen from "../components/Screen";

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

function MessageScreen(props) {
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
      <View style={styles.containerTop}>
        <Back color={colors.secondary} onPress={() => null} />

        <Text style={[styles.textTop]}>Messages</Text>

        <TouchableOpacity>
          <MaterialIcons name="add" size={28} color={colors.secondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerList}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title + item.id}
              description={item.description}
              image={item.image}
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
  containerTop: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 5,
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  containerList: {
    flex: 1,
  },
  textTop: {
    color: colors.secondary,
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default MessageScreen;
