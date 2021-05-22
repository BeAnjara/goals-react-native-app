import React, {FC} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

interface GoalsProps {
  goals: any[];
  children?: any;
}

const RenderListItem = ({value}: {value: string}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        console.log('is touched');
      }}>
      <View style={styles.goals}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Goals: FC<GoalsProps> = props => {
  const {goals} = props;
  return (
    <>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => <RenderListItem value={itemData.item.value} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  goals: {
    padding: 5,
    backgroundColor: 'grey',
    margin: 2,
  },
});
export default Goals;
