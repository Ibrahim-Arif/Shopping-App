import React from "react";
import { StyleSheet, FlatList, View, StatusBar } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import Seperator from "../components/Seperator";
import { useUser } from "../components/userContext";

function AccountScreen({ navigation }) {
  const {
    user: { username, email, image },
    setUser,
  } = useUser();

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
      onPress: () => navigation.navigate("Messages"),
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

  return (
    <View style={styles.container}>
      <View style={styles.userDetailContainer}>
        <ListItem title={username} description={email} image={image} />
      </View>

      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            onPress={item.onPress}
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
            onPress={() => setUser("")}
            IconComponent={
              <Icon name="logout" backgroundColor={colors.yellow} />
            }
          />
        )}
        ListHeaderComponent={() => <View style={{ marginTop: 20 }} />}
        ListFooterComponentStyle={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    flex: 1,
  },
  userDetailContainer: {
    height: StatusBar.currentHeight + 80,
    backgroundColor: colors.white,
    justifyContent: "flex-end",
  },
});
export default AccountScreen;
