import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DateSection} from './components/DateSection';
import {ToDoSection} from './components/ToDoSection';
import {StoreInterface} from './modules/index.d';
import {toastHide, undo, writeMode} from './modules/week';
import {ToDoInput} from './components/ToDoInput';
import {PlusButton} from './components/PlusButton';
import {UndoToast} from './components/UndoToast';

export const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const week = useSelector((state: StoreInterface) => state.week);

  const setWriteMode = () => {
    dispatch(writeMode(true));
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(toastHide());
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [week]);

  return (
    <View style={style.layoutWrapper}>
      <DateSection />
      <ToDoSection />
      {week.writeMode ? (
        <ToDoInput weekNum={week.activeWeek} />
      ) : (
        <PlusButton event={setWriteMode} />
      )}
      {week.showToast && <UndoToast event={() => dispatch(undo())} />}
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
