import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>My Goals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#898fdf',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#f0f1f9',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
});

export default Header;
