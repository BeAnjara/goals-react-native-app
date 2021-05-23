import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ionicons';
interface GoalsProps {
  goals: any[];
  children?: any;
  deleteGoal: (goalId: string) => void;
}
interface RenderListItemInterface {
  value: string;
  goalId: string;
  deleteGoal: (goalId: string) => void;
}
const RenderListItem: FC<RenderListItemInterface> = props => {
  const {deleteGoal, value, goalId} = props;
  return (
    <View style={styles.goals}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.goalTextContent}
        onPress={() => {
          console.log('text is clicked');
        }}>
        <Text>{value}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.goalDeleteIcon}
        activeOpacity={0.8}
        onPress={() => {
          deleteGoal(goalId);
        }}>
        <Icon name="trash" />
      </TouchableOpacity>
    </View>
  );
};

const Goals: FC<GoalsProps> = props => {
  const {goals, deleteGoal} = props;
  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.goalListTitle}> Goal list</Text>
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <RenderListItem
            value={itemData.item.value}
            deleteGoal={deleteGoal}
            goalId={itemData.item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goals: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 0,
    marginTop: 10,
    marginHorizontal: 2,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  listContainer: {
    flex: 1,
    padding: 10,
  },
  goalListTitle: {
    color: '#2e3267',
    fontWeight: 'bold',
  },
  goalTextContent: {
    flex: 8,
    padding: 10,
  },
  goalDeleteIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Goals;
