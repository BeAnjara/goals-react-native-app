// @refresh reset
import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, Alert} from 'react-native';

import uuid from 'react-native-uuid';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import GoalInput from './components/GoalInput';
import Goals from './components/Goals/Goals';
import Header from './components/Header';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [goalValue, setGoalValue] = useState<string>('');
  const [allGoals, setAllGoals] = useState<any[]>([]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addGoal = () => {
    if (goalValue.trim()) {
      setAllGoals(allGoals => [{id: uuid.v4(), value: goalValue}, ...allGoals]);
      setGoalValue('');
    } else {
      Alert.alert(
        'Warning',
        "Goal titles mustn't be empty",
        [
          {
            text: 'OK',
          },
        ],
        {cancelable: true},
      );
    }
  };

  const deleteGoal = (goalId: string) => {
    Alert.alert(
      'Confirm',
      'Are you sure',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            setAllGoals(prevAllGoals => {
              return prevAllGoals.filter(goal => goal.id !== goalId);
            }),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <GoalInput
        addGoal={addGoal}
        goalValue={goalValue}
        setGoalValue={setGoalValue}
      />
      <Goals goals={allGoals} deleteGoal={deleteGoal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
  },
});

export default App;
