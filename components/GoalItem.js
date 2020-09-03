import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listgoals}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listgoals: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: "lightgreen",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
