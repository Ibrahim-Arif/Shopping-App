import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import MyPicker from "./MyPicker";
import ErrorText from "./ErrorText";

function FormPicker({ title, width, items, placeholder, icon, style }) {
  const { values, setFieldValue } = useFormikContext();

  return (
    <View style={{ width: width }}>
      <MyPicker
        title={values[title] || placeholder}
        items={items}
        icon={icon}
        style={style}
        onPress={(item) => setFieldValue(title, item)}
      />
      <ErrorText title={title} />
    </View>
  );
}

export default FormPicker;
