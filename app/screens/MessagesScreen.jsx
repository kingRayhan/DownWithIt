import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListDeleteAction from "../components/ListDeleteAction";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListSperator from "../components/ListSperator";

const demo_messages = [
  {
    id: 1,
    title: "heyyy vai",
    descriotion: "d1 2",
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
  let [messages, setMessages] = useState(demo_messages);
  let [refreshing, setRefreshing] = useState(false);

  const handleDeleteMessage = (message) => {
    // Delete from state
    setMessages(messages.filter((m) => m.id != message.id));

    // Delete from server
    // TODO:
  };

  const handlePullRefresh = () => {
    const newMsg = {
      id: Date.now(),
      title: "t1",
      descriotion: "d1",
      image: require("../assets/mosh.jpg"),
    };

    setMessages([newMsg, ...messages]);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("message selected", item)}
            title={item.title}
            subtitle={item.descriotion}
            image={item.image}
            renderRightActions={() => (
              <ListDeleteAction onPress={() => handleDeleteMessage(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={handlePullRefresh}
        ItemSeparatorComponent={ListSperator}
      />
    </Screen>
  );
};

export default Messages;

const styles = StyleSheet.create({});
