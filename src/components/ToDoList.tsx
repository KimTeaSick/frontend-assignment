import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

import DeleteSVG from '../assets/delete.svg';
import CheckedSVG from '../assets/checked.svg';
import UnCheckedSVG from '../assets/unChecked.svg';
import {ToDoType} from '../modules/week/index.d';
import {RootInitialType} from '../modules/index.d';
import {fixToDoChoice, writeMode} from '../modules/week';

type Props = {
  toDo: ToDoType;
  doIt: (toDo: ToDoType) => void;
  deleteIt: (toDo: ToDoType) => void;
};

export const ToDoList = ({toDo, doIt, deleteIt}: Props) => {
  const dispatch = useDispatch();
  const week = useSelector((state: RootInitialType) => state.week);
  const checkWidth = useSharedValue(0);
  const deleteWidth = useSharedValue(0);

  React.useEffect(() => {
    if (!week.editMode) {
      checkWidth.value = withTiming(28, {duration: 100});
      deleteWidth.value = withTiming(0, {duration: 100});
    }
    if (week.editMode) {
      checkWidth.value = withTiming(0, {duration: 100});
      deleteWidth.value = withTiming(28, {duration: 100});
    }
  }, [deleteWidth, checkWidth, week.editMode]);

  return (
    <View style={style(week.editMode).toDoList}>
      {!week.editMode && (
        <Animated.View style={{width: checkWidth}}>
          <TouchableOpacity onPress={() => doIt(toDo)}>
            {toDo.checked ? <CheckedSVG /> : <UnCheckedSVG />}
          </TouchableOpacity>
        </Animated.View>
      )}
      <Text
        style={style(week.editMode, toDo.checked).toDoText}
        onPress={() => {
          dispatch(fixToDoChoice(toDo));
          dispatch(writeMode(true));
        }}>
        {toDo.content}
      </Text>
      {week.editMode && (
        <Animated.View style={{width: deleteWidth}}>
          <TouchableOpacity
            style={style(week.editMode).deleteButton}
            onPress={() => deleteIt(toDo)}>
            <DeleteSVG />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const style = (editMode: boolean, checked?: boolean) =>
  StyleSheet.create({
    toDoList: {
      height: 'auto',
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      aligntoDos: 'center',
      justifyContent: editMode ? 'space-between' : 'flex-start',
    },
    toDoText: {
      width: '80%',
      fontSize: 14,
      lineHeight: 21,
      paddingLeft: 12,
      color: checked ? '#C4C4C4' : '#333',
      textDecorationLine: checked ? 'line-through' : 'none',
      textAlign: 'left',
    },
    deleteButton: {
      alignSelf: 'center',
    },
  });
