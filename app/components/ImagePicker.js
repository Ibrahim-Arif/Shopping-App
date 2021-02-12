import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as imagePicker from "expo-image-picker";

function ImagePicker({ imageUri, onChangeImage, style }) {
  useEffect(() => {
    async () => await imagePicker.requestCameraRollPermissionsAsync();
  }, []);

  const pickImage = async () => {
    try {
      const { cancelled, uri } = await imagePicker.launchImageLibraryAsync({
        mediaTypes: imagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      alert("something went wrong!!");
    }
  };

  const handleOnPress = () => {
    !imageUri
      ? pickImage()
      : Alert.alert("Delete", "Are you sure?", [
          { text: "No" },
          {
            text: "Yes",
            onPress: () => onChangeImage(null),
          },
        ]);
  };

  return (
    <TouchableHighlight
      onPress={() => handleOnPress()}
      style={[styles.imageContainer, style]}
      underlayColor="#F0F0F0"
    >
      <>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            resizeMode="cover"
            style={styles.image}
          />
        )}
        {!imageUri && (
          <MaterialCommunityIcons name="camera" size={32} color="#918C8C" />
        )}
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#E7E9E9",
    width: 100,
    height: 100,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePicker;
