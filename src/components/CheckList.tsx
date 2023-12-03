import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import {StoreInterface} from '../modules/index.d';
import {ToDoType} from '../modules/week/index.d';

import {ToDoList} from './ToDoList';
import {ToDoInput} from './ToDoInput';
import {PlusButton} from './PlusButton';
import {Progress} from './Progress';
import {EmptyList} from './EmptyList';
import {setItem} from '../utils/setItem';
import {checked, deleteList, writeMode} from '../modules/week';

type Props = {
  id: number;
};

export const CheckList = ({id}: Props) => {
  const dispatch = useDispatch();
  const weekSe = useSelector((state: StoreInterface) => state.week);
  const [weekToDo, setWeekToDo] = React.useState<ToDoType[]>([]);

  const doIt = (item: ToDoType) => {
    dispatch(
      checked({
        content: item.content,
        weekNumber: item.weekNumber,
        checked: !item.checked,
      }),
    );
  };

  const deleteIt = (item: ToDoType) => {
    dispatch(
      deleteList({
        content: item.content,
        weekNumber: item.weekNumber,
      }),
    );
  };

  const setWriteMode = () => {
    dispatch(writeMode(true));
  };

  React.useEffect(() => {
    const item = setItem(weekSe.toDoList, id);
    setWeekToDo(item);
  }, [weekSe.toDoList, id]);

  return (
    <View style={style.toDoListWrapper}>
      {weekToDo.length !== 0 ? (
        <>
          <Progress items={weekToDo} />
          {weekToDo.map((item, i) => (
            <ToDoList key={i} item={item} doIt={doIt} deleteIt={deleteIt} />
          ))}
        </>
      ) : (
        <EmptyList />
      )}

      {weekSe.writeMode ? (
        <ToDoInput weekNum={id} />
      ) : (
        <PlusButton event={setWriteMode} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  toDoListWrapper: {
    flex: 8,
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
