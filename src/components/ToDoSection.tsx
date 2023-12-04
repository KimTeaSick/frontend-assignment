import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {RootInitialType} from '../modules/index.d';
import {ToDoType} from '../modules/week/index.d';

import {ToDoList} from './ToDoList';
import {Progress} from './Progress';
import {EmptyList} from './EmptyList';
import {setItem} from '../utils/setItem';
import {checked, deleteList} from '../modules/week';

export const ToDoSection = () => {
  const dispatch = useDispatch();
  const week = useSelector((state: RootInitialType) => state.week);

  const [weekToDo, setWeekToDo] = React.useState<ToDoType[]>([]);

  const offset = useSharedValue(0);
  const doIt = (toDo: ToDoType) => {
    dispatch(
      checked({
        weekNumber: toDo.weekNumber,
        content: toDo.content,
        checked: !toDo.checked,
      }),
    );
  };

  const deleteIt = (toDo: ToDoType) => {
    dispatch(
      deleteList({
        content: toDo.content,
        weekNumber: toDo.weekNumber,
      }),
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  React.useEffect(() => {
    offset.value = week.prevWeek < week.activeWeek ? 500 : -500;
    offset.value = withTiming(0, {
      duration: 500,
    });
  }, [week.activeWeek, week.prevWeek, offset]);

  React.useEffect(() => {
    const item = setItem(week.toDoList, week.activeWeek);
    setWeekToDo(item);
  }, [week.activeWeek, week.toDoList]);

  return (
    <>
      <Animated.View style={[style.toDoListWrapper, animatedStyle]}>
        {weekToDo.length !== 0 ? (
          <>
            <Progress toDo={weekToDo} />
            <ScrollView>
              {weekToDo.map((toDo, i) => (
                <ToDoList key={i} toDo={toDo} doIt={doIt} deleteIt={deleteIt} />
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
    flex: 8,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
});
