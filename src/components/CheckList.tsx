import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import {StoreInterface} from '../modules/index.d';
import {ToDoType} from '../modules/week/index.d';

import {ToDoList} from './ToDoList';
import {ToDoInput} from './ToDoInput';
import {PlusButton} from './PlusButton';
import {setItem} from '../utils/setItem';
import {Progress} from './Progress';
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
      <Progress items={weekToDo} />
      <View>
        {weekToDo.map(
          (item, i) =>
            item.weekNumber === id && (
              <ToDoList key={i} item={item} doIt={doIt} deleteIt={deleteIt} />
            ),
        )}
      </View>
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
  largeText: {
    fontSize: 20,
    color: '#84858F',
    fontWeight: 'bold',
  },
  baseText: {
    fontSize: 18,
    color: '#999',
  },
});
