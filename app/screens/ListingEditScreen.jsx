import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import FormAppImageInputList from "../components/Form/FormAppImageInputList";
import AppFormPicker from "../components/Form/AppFormPicker";
import AppFormSubmitButton from "../components/Form/AppFormSubmitButton";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const ListingEditScreen = () => {
  const location = useLocation();

  const handleFormSubmission = (values) => {
    console.log("Form submitted", { values, location });
  };

  return (
    <Screen style={styles.screen}>
      <AppForm
        validationSchema={validationSchema}
        onSubmit={handleFormSubmission}
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
      >
        <FormAppImageInputList name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={5}
          icon="currency-usd"
          name="price"
          width={120}
          placeholder="Price"
        />
        <AppFormPicker
          name="category"
          items={categories}
          numColumns={3}
          PickerItemComponent={CategoryPickerItem}
          icon="apps"
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <AppFormSubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
