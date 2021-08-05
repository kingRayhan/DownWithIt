import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AuthContext from "../auth/AuthContext";
import AuthStorage from "../auth/storage";
import AppIcon from "../components/AppIcon";
import ListItem from "../components/Listing/ListItem";
import ListSperator from "../components/Listing/ListSperator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetedScreen: routes.MESSAGES,
  },
];

const AccountScreen = () => {
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);

  const handleLogout = async () => {
    Alert.alert("Sure to logout?", null, [
      {
        text: "Logout",
        onPress: async () => {
          authContext.setUser(null);
          await AuthStorage.removeToken();
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={authContext.user.name}
          subTitle={authContext.user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListSperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetedScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title="logout"
        onPress={handleLogout}
        IconComponent={
          <AppIcon name="logout" backgroundColor="#ffe66d" iconColor="#000" />
        }
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
