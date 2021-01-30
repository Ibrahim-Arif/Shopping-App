import React from "react";
import { StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import Seperator from "../components/Seperator";

const menuItems = [
  {
    title: "My Listings",
    onPress: null,
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    onPress: null,
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "Help & Support",
    onPress: null,
    icon: {
      name: "help",
      backgroundColor: colors.darkgrey,
    },
  },
  {
    title: "Account Settings",
    onPress: null,
    icon: {
      name: "account-settings",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <ListItem
        title="Ibrahim Arif"
        description="ibrahimrana232@gmail.com"
        image={require("../assets/user.jpg")}
        onPress={() => null}
        style={{ marginBottom: 20 }}
      />

      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            onPress={() => item.onPress}
            IconComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        )}
        keyExtractor={(menuItem) => menuItem.title}
        ItemSeparatorComponent={Seperator}
        ListFooterComponent={() => (
          <ListItem
            title="Log Out"
            onPress={() => null}
            IconComponent={
              <Icon name="logout" backgroundColor={colors.yellow} />
            }
          />
        )}
        ListFooterComponentStyle={{ marginTop: 20 }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
  },
});
export default AccountScreen;
