import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFormikContext } from "formik";

import MyTextInput from "./MyTextInput";
import colors from "../config/colors";

function FormTextInput({ title, ...otherProps }) {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();

  return (
    <>
      <MyTextInput
        onBlur={() => setFieldTouched(title)}
        onChangeText={handleChange(title)}
        {...otherProps}
      />
      {touched[title] && <Text style={styles.errortext}>{errors[title]}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  errortext: {
    color: colors.danger,
    marginLeft: 35,
    fontSize: 15,
    marginTop: -5,
  },
});

export default FormTextInput;
