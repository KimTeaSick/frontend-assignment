import * as React from 'react';
import {View} from 'react-native';
import {DateSection} from './components/DateSection';
import {CheckList} from './components/CheckList';

export const Layout: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <DateSection />
      <CheckList id={15} />
    </View>
  );
};
