import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import MyTextInput from "./MyTextInput";
import ErrorText from "./ErrorText";

function FormTextInput({ title, width, ...otherProps }) {
  const { setFieldTouched, handleChange, values } = useFormikContext();

  return (
    <View style={{ width: width }}>
      <MyTextInput
        onBlur={() => setFieldTouched(title)}
        onChangeText={handleChange(title)}
        value={values[title]}
        style={[otherProps.style]}
        {...otherProps}
      />
      <ErrorText title={title} />
    </View>
  );
}

export default FormTextInput;
