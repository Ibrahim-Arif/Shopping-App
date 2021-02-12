import React, { useRef } from "react";
import { FlatList } from "react-native";
import ImagePicker from "./ImagePicker";

function ImagePickerList({ imageUris, onDelete, onAdd }) {
  const flatlist = useRef();

  return (
    <FlatList
      data={imageUris}
      keyExtractor={(item) => item}
      ref={flatlist}
      horizontal
      showsHorizontalScrollIndicato={false}
      onContentSizeChange={() => flatlist.current.scrollToEnd()}
      renderItem={({ item }) => (
        <ImagePicker
          imageUri={item}
          onChangeImage={() => onDelete(item)}
          style={{ marginRight: 10 }}
        />
      )}
      ListFooterComponent={
        <ImagePicker onChangeImage={(item) => onAdd(item)} />
      }
      style={{ marginVertical: 10 }}
    />
  );
}

export default ImagePickerList;
