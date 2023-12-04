import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DateSection} from './components/DateSection';
import {CheckList} from './components/CheckList';
import {StoreInterface} from './modules/index.d';
import {writeMode} from './modules/week';
import {ToDoInput} from './components/ToDoInput';
import {PlusButton} from './components/PlusButton';

export const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const week = useSelector((state: StoreInterface) => state.week);
  const setWriteMode = () => {
    dispatch(writeMode(true));
  };
  return (
    <View style={style.layoutWrapper}>
      <DateSection />
      <CheckList />
      {week.writeMode ? (
        <ToDoInput weekNum={week.activeWeek} />
      ) : (
        <PlusButton event={setWriteMode} />
      )}
    </View>
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
