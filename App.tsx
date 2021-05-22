// @refresh reset
import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import uuid from 'react-native-uuid';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import GoalInput from './components/GoalInput';
import Goals from './components/Goals/Goals';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [goalValue, setGoalValue] = useState<string>('');
  const [allGoals, setAllGoals] = useState<any[]>([]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addGoal = () => {
    setAllGoals(allGoals => [...allGoals, {id: uuid.v4(), value: goalValue}]);
    setGoalValue('');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <GoalInput
          addGoal={addGoal}
          goalValue={goalValue}
          setGoalValue={setGoalValue}
        />
        <Goals goals={allGoals} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default App;
