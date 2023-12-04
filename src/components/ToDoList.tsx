import * as React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

import DeleteSVG from '../assets/delete.svg';
import CheckedSVG from '../assets/checked.svg';
import UnCheckedSVG from '../assets/unChecked.svg';
import {ToDoType} from '../modules/week/index.d';
import {StoreInterface} from '../modules/index.d';

type Props = {
  item: ToDoType;
  doIt: (item: ToDoType) => void;
  deleteIt: (item: ToDoType) => void;
};

export const ToDoList = ({item, doIt, deleteIt}: Props) => {
  const week = useSelector((state: StoreInterface) => state.week);

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
          <TouchableOpacity onPress={() => doIt(item)}>
            {item.checked ? <CheckedSVG /> : <UnCheckedSVG />}
          </TouchableOpacity>
        </Animated.View>
      )}
      <Text style={style(week.editMode, item.checked).toDoText}>
        {item.content}
      </Text>
      {week.editMode && (
        <Animated.View style={{width: deleteWidth}}>
          <TouchableOpacity
            style={style(week.editMode).deleteButton}
            onPress={() => deleteIt(item)}>
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
      // backgroundColor: 'red',
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
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
