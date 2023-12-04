import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';

import {StoreInterface} from '../modules/index.d';
import {ToDoType} from '../modules/week/index.d';

import {ToDoList} from './ToDoList';
import {ToDoInput} from './ToDoInput';
import {PlusButton} from './PlusButton';
import {Progress} from './Progress';
import {EmptyList} from './EmptyList';
import {setItem} from '../utils/setItem';
import {checked, deleteList, writeMode} from '../modules/week';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  id: number;
};

export const CheckList = ({id}: Props) => {
  const dispatch = useDispatch();
  const weekSe = useSelector((state: StoreInterface) => state.week);
  const [weekToDo, setWeekToDo] = React.useState<ToDoType[]>([]);
  const offset = useSharedValue(0);
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

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  React.useEffect(() => {
    offset.value = weekSe.prevWeek < weekSe.activeWeek ? 500 : -500;
    offset.value = withTiming(0, {
      duration: 500,
    });
  }, [id]);

  React.useEffect(() => {
    const item = setItem(weekSe.toDoList, id);
    setWeekToDo(item);
  }, [id, weekSe.toDoList]);

  return (
    <Animated.View style={[style.toDoListWrapper, animatedStyle]}>
      {weekToDo.length !== 0 ? (
        <ScrollView>
          <Progress items={weekToDo} />
          {weekToDo.map((item, i) => (
            <ToDoList key={i} item={item} doIt={doIt} deleteIt={deleteIt} />
          ))}
        </ScrollView>
      ) : (
        <EmptyList />
      )}
      {weekSe.writeMode ? (
        <ToDoInput weekNum={id} />
      ) : (
        <PlusButton event={setWriteMode} />
      )}
    </Animated.View>
  );
};

const style = StyleSheet.create({
  toDoListWrapper: {
    flex: 8,
    paddingLeft: 20,
    paddingRight: 20,
    // justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
