/**
 * Component represent "What You'll Do" section of tour detail
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../styles/commonStyles';

const ThingsToDo = ({tour}) => {
  return (
    <View style={styles.container}>
      <Text style={commonStyles.sectionTitle}>What You'll Do</Text>
      <Text style={{fontSize: 16}}>{tour.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ThingsToDo;
