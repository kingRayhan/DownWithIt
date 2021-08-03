import React from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import ListDeleteAction from "../components/ListDeleteAction";
import ListItem from "../components/ListItem";
import ListSperator from "../components/ListSperator";

const messages = [
  {
    id: 1,
    title: "t1",
    descriotion: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t1",
    descriotion: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "t1",
    descriotion: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "t1",
    descriotion: "d1",
    image: require("../assets/mosh.jpg"),
  },
];

const Messages = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("message selected", item)}
            title={item.title}
            subtitle={item.descriotion}
            image={item.image}
            renderRightActions={ListDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListSperator}
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
