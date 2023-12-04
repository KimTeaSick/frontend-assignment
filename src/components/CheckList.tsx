import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {StoreInterface} from '../modules/index.d';
import {ToDoType} from '../modules/week/index.d';

import {ToDoList} from './ToDoList';
import {Progress} from './Progress';
import {EmptyList} from './EmptyList';
import {setItem} from '../utils/setItem';
import {checked, deleteList} from '../modules/week';

export const CheckList = () => {
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
  }, [weekSe.activeWeek, weekSe.prevWeek, offset]);

  React.useEffect(() => {
    const item = setItem(weekSe.toDoList, weekSe.activeWeek);
    setWeekToDo(item);
  }, [weekSe.activeWeek, weekSe.toDoList]);

  return (
    <>
      <Animated.View style={[style.toDoListWrapper, animatedStyle]}>
        {weekToDo.length !== 0 ? (
          <>
            <Progress items={weekToDo} />
            <ScrollView>
              {weekToDo.map((item, i) => (
                <ToDoList key={i} item={item} doIt={doIt} deleteIt={deleteIt} />
              ))}
            </ScrollView>
          </>
        ) : (
          <EmptyList />
        )}
      </Animated.View>
    </>
  );
};

const style = StyleSheet.create({
  toDoListWrapper: {
    flex: 7,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
});
