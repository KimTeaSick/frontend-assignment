import * as React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DateSection} from './components/DateSection';
import {CheckList} from './components/CheckList';
import {StoreInterface} from './modules/index.d';
import {writeMode} from './modules/week';

export const Layout: React.FC = () => {
  const week = useSelector((state: StoreInterface) => state.week);
  const dispatch = useDispatch();

  const setWriteMode = () => {
    dispatch(writeMode(false));
  };

  return (
    <TouchableNativeFeedback
      onPress={() => {
        Keyboard.dismiss();
        setWriteMode();
      }}>
      <SafeAreaView style={style.layoutWrapper}>
        <DateSection />
        <CheckList id={week.activeWeek} />
      </SafeAreaView>
    </TouchableNativeFeedback>
  );
};

const style = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
