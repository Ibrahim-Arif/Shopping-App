import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";

import Screen from "../components/Screen";
import colors from "../config/colors";
import FormTextInput from "../components/FormTextInput";
import MyButton from "../components/MyButton";
import TopTitle from "../components/TopTitle";
import FormPicker from "../components/FormPicker";
import ImagePickerList from "../components/ImagePickerList";

const valiadationRules = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.string().required().min(1).label("Price"),
  category: yup.string().required().nullable().label("Category"),
  description: yup.string().label("Description"),
});

const categories = [
  { title: "furniture", id: 1 },
  { title: "clothing", id: 2 },
  { title: "camera", id: 3 },
  { title: "glasses", id: 4 },
  { title: "babies & toys", id: 5 },
  { title: "sports", id: 6 },
  { title: "motorbikes", id: 7 },
  { title: "home appliances", id: 8 },
];

function ListingEditingScreen(props) {
  const [images, setImages] = useState([]);

  return (
    <Screen style={styles.container}>
      <TopTitle title="Item Detail" color={colors.primary} />

      <ScrollView>
        <Formik
          initialValues={{
            category: "",
            description: "",
            price: "",
            title: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={valiadationRules}
        >
          {({ handleSubmit }) => (
            <View style={styles.formContainer}>
              <ImagePickerList
                onAdd={(image) => setImages([...images, image])}
                onDelete={(image) =>
                  setImages(images.filter((i) => i !== image))
                }
                imageUris={images}
              />

              <FormTextInput
                title="title"
                placeholder="Title"
                style={styles.textInput}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormTextInput
                  title="price"
                  placeholder="Price"
                  width="35%"
                  style={styles.textInput}
                />
                <FormPicker
                  title="category"
                  placeholder="Category"
                  items={categories}
                  width="60%"
                  style={styles.textInput}
                />
              </View>

              <FormTextInput
                title="description"
                placeholder="Description"
                multiline={true}
                scrollEnabled={true}
                style={[styles.textInput, { height: 90 }]}
              />
              <MyButton
                color={colors.primary}
                style={styles.submitButton}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  formContainer: {
    alignSelf: "center",
    width: "95%",
  },
  textInput: {
    borderRadius: 20,
    height: 50,
    paddingLeft: 15,
    marginVertical: 10,
  },
  submitButton: {
    borderRadius: 25,
    marginTop: 20,
    alignSelf: "center",
    height: 50,
  },
});

export default ListingEditingScreen;
