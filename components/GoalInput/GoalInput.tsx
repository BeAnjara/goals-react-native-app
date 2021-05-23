import React, {FC} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

interface GoalInputProps {
  children?: any;
  goalValue: string;
  setGoalValue: (value: string) => void;
  addGoal: () => void;
}
const GoalInput: FC<GoalInputProps> = props => {
  const {goalValue, setGoalValue, addGoal} = props;
  return (
    <View style={styles.addGoal}>
      <TextInput
        placeholder="Add new goal"
        value={goalValue}
        onChangeText={(text: string) => {
          setGoalValue(text);
        }}
        style={{
          flex: 1,
          borderColor: 'black',
          borderWidth: 1,
          padding: 10,
        }}
      />
      <Button title="Add" onPress={addGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  addGoal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default GoalInput;
