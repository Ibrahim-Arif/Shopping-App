import React from "react";
import { FlatList } from "react-native";
import ImagePicker from "./ImagePicker";

function ImagePickerList({ imageUris, onDelete, onAdd }) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicato={false}
      data={imageUris}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <ImagePicker
          imageUri={item}
          onChangeImage={onDelete}
          forList={true}
          style={{ marginRight: 10 }}
        />
      )}
      ListFooterComponent={<ImagePicker onChangeImage={onAdd} />}
      style={{ marginVertical: 10 }}
    />
  );
}

export default ImagePickerList;
