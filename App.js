import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";

import AppText from "./app/components/AppText";
import AppPicker from "./app/components/Form/AppPicker";
import ImageInput from "./app/components/Form/AppImageInput";
import AppImageInputList from "./app/components/Form/AppImageInputList";

import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccount from "./app/screens/MyAccount";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Camara",
    value: 3,
  },
];

const App = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = (uri) => {
    setImages([...images, uri]);
  };

  const handleDeleteImage = (uri) => {
    setImages(images.filter((u) => u !== uri));
  };

  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <ListingScreen />;
  // return <LoginScreen />;
  // return <ListingEditScreen />;
  // return <MyAccount />;

  // return (
  //   <Screen>
  //     <AppPicker
  //       selectedItem={item}
  //       onSelectItem={setItem}
  //       icon="apps"
  //       placeholder="Categories"
  //       items={categories}
  //     />
  //   </Screen>
  // );

  return (
    <Screen>
      <AppImageInputList
        imageUris={images}
        onAddImage={handleAddImage}
        onDeleteImage={handleDeleteImage}
      />
    </Screen>
  );
};

export default App;
