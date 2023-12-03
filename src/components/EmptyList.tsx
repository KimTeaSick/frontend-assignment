import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import EmptyListSVG from '../assets/emptyList.svg';

export const EmptyList = () => {
  return (
    <View style={style.EmptyListWrapper}>
      <EmptyListSVG />
      <View>
        <Text style={style.largeText}>No checklists</Text>
        <Text style={style.baseText}>
          Add checklists that should be checked weekly.
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  EmptyListWrapper: {
    marginTop: 99,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  largeText: {
    fontSize: 20,
    color: '#84858F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  baseText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#999',
  },
});
