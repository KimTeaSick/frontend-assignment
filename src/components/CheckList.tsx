import * as React from 'react';
import {Text, View} from 'react-native';
import CheckSVG from '../assets/Check.svg';

export const CheckList: React.FC = () => {
  return (
    <View style={{flex: 10, backgroundColor: '#f9f9f9', display: 'flex'}}>
      <CheckSVG />
      <Text>CheckList</Text>
    </View>
  );
};
