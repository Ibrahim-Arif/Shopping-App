import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PickerItem from "./PickerItem";

function MyPicker({ title, icon, items, style, onPress }) {
  const [clicked, setClicked] = useState(false);
  const [textColor, setTextColor] = useState("#7a7a7a");

  return (
    <>
      <TouchableWithoutFeedback
        underlayColor={"#E7E9E9"}
        onPress={() => setClicked(true)}
        activeOpacity={0.2}
      >
        <View style={[styles.container, style]}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={24} color="#918C8C" />
          )}
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color="#918C8C"
            style={{ marginRight: 10 }}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={clicked} animationType="slide">
        <Button title="close" onPress={() => setClicked(false)} />

        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              title={item.title}
              onPress={() => {
                onPress(item.title);
                setClicked(false);
                setTextColor("#070505");
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7E9E9",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
});

export default MyPicker;
