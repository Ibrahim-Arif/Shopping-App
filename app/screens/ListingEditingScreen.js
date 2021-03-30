import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";
import FormImagePicker from "../components/FormImagePicker";
import FormPicker from "../components/FormPicker";
import FormTextInput from "../components/FormTextInput";
import listingApi from "../api/Listing";
import MyButton from "../components/MyButton";
import Screen from "../components/Screen";
import TopTitle from "../components/TopTitle";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
import { useUser } from "../components/userContext";

const valiadationRules = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.string().required().min(1).label("Price"),
  category: yup.string().required().nullable().label("Category"),
  description: yup.string().label("Description"),
  images: yup.array().min(1, "Please select atleast one image"),
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
  const [uploadProgress, setUploadProgress] = useState(0);
  const { user } = useUser();
  const location = useLocation();

  const handleSubmit = (listing, { resetForm }) => {
    setUploadProgress(0);
    const result = listingApi.addListing(
      { ...listing, location },
      setUploadProgress,
      user
    );

    if (!result.ok) return alert(`Couldn't add listing: ` + result.problem);
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={uploadProgress}
        visible={uploadProgress > 0 && uploadProgress < 1}
      />
      <TopTitle title="Item Detail" color={colors.primary} />

      <ScrollView>
        <Formik
          initialValues={{
            category: "",
            description: "",
            price: "",
            title: "",
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={valiadationRules}
        >
          {({ handleSubmit }) => (
            <View style={styles.formContainer}>
              <FormImagePicker title="images" />

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
                title="Submit"
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
