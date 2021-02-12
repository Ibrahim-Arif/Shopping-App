import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFormikContext } from "formik";

import colors from "../config/colors";

function ErrorText({ title }) {
  const { errors, touched } = useFormikContext();

  return !touched[title] || !errors[title] ? null : (
    <Text style={styles.errortext}>{errors[title]}</Text>
  );
}

const styles = StyleSheet.create({
  errortext: {
    color: colors.danger,
    marginLeft: 10,
    fontSize: 15,
    marginTop: -5,
  },
});

export default ErrorText;
