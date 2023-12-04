import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RightButton} from './RightButton';

export const Header = () => {
  return (
    <SafeAreaView style={style.headerWrapper}>
      <View style={style.leftButtonSection} />
      <Text style={style.headerTitle}>Checklists</Text>
      <View style={style.rightButtonSection}>
        <RightButton />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerWrapper: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButtonSection: {
    width: 100,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightButtonSection: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
});
