import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [coarseGoals, setCoarseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCoarseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCoarseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdder = () => {
    setAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setAddMode(true)} />
      <GoalInput
        visible={addMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdder}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={coarseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
