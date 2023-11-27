import * as React from 'react';
import {Text, View} from 'react-native';
import {DateSection} from './components/DateSection';

export const Layout: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <DateSection />
      <Text style={{fontSize: 24, fontWeight: '600'}}>layout</Text>
    </View>
  );
};
