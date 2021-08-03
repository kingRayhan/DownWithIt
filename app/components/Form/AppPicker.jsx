import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../../config/colors";

import defaultStyles from "../../config/defaultStyles";
import AppText from "../AppText";
import PickerItem from "./PickerItem";
import Screen from "../Screen";
import AppFlatButton from "../AppFlatButton";

const AppPicker = ({
  icon,
  placeholder,
  selectedItem,
  onSelectItem,
  items = [],
  ...otherProps
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              size={20}
              name={icon}
              styles={styles.icon}
              color={colors.medium}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            size={20}
            name="chevron-down"
            styles={styles.icon}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <AppFlatButton
            icon="close"
            title="close"
            color={colors.danger}
            onPress={() => setModalVisible(false)}
          />

          <FlatList
            data={items}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <PickerItem
                {...item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    ...defaultStyles.text,
    flex: 1,
  },
  placeholder: {
    ...defaultStyles.text,
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  icon: {},
});